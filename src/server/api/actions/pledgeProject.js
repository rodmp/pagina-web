import { head, add, prop, compose, map } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY, GSI1_INDEX_NAME, GSI1_PARTITION_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import sendEmail from 'root/src/server/email/actions/sendEmail'
import pledgeMadeMail from 'root/src/server/email/templates/pledgeMade'
import { pledgeMadeTitle } from 'root/src/server/email/util/emailTitles'
import projectHrefBuilder from 'root/src/server/api/actionUtil/projectHrefBuilder'

import { PLEDGE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import pledgeDynamoObj from 'root/src/server/api/actionUtil/pledgeDynamoObj'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import getUserEmail from 'root/src/server/api/actionUtil/getUserEmail'
import validateStripeSourceId from 'root/src/server/api/actionUtil/validateStripeSourceId'

const payloadLenses = getPayloadLenses(PLEDGE_PROJECT)
const { viewPledgeAmount, viewStripeCardId } = payloadLenses

export default async ({ userId, payload }) => {
	const { projectId } = payload
	const [
		projectToPledgeDdb,
	] = await dynamoQueryProject(
		userId, projectId,
	)

	const projectToPledge = head(projectToPledgeDdb)
	if (!projectToPledge) {
		throw generalError('Project doesn\'t exist')
	}

	const myPledge = head(myPledgeDdb || [])

	if (myPledge) {
		throw generalError('You\'ve already pledged this project')
	}

	const newPledgeAmount = viewPledgeAmount(payload)

	const sourceId = viewStripeCardId(payload)
	if (!validateStripeSourceId(sourceId)) {
		throw payloadSchemaError({ stripeCardId: 'Invalid source id' })
	}

	const newPledge = pledgeDynamoObj(
		projectId, projectToPledge, userId,
		newPledgeAmount, sourceId,
	)

	const myPledge = await documentClient.query({
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and ${SORT_KEY} = :pledgeUserId`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':pledgeUserId': `pledge|${userId}`,
		},
		ConsistentRead: true,
	}).promise()


	const { pledgeAmount } = projectToPledge

	// TODO: Check pledge amount
	const pledgeParams = {
		TableName: TABLE_NAME,
		Item: newPledge,
	}

	await documentClient.put(pledgeParams).promise()

	const addPledgers = myPledge.Count > 0 ? 0 : 1

	const updateProjectParams = {
		TableName: TABLE_NAME,
		Key: {
			[PARTITION_KEY]: projectToPledge[PARTITION_KEY],
			[SORT_KEY]: projectToPledge[SORT_KEY],
		},
		UpdateExpression: 'SET pledgeAmount = :newPledgeAmount, pledgers = pledgers + :newPledgers',
		ExpressionAttributeValues: {
			':newPledgeAmount': pledgeAmount + newPledgeAmount,
			':newPledgers': addPledgers,
		},
	}

	await documentClient.update(updateProjectParams).promise()

	const newProject = projectSerializer([
		...projectToPledgeDdb,
		newPledge,
	])

	try {
		const email = await getUserEmail(userId)

		const emailData = {
			title: pledgeMadeTitle,
			dareTitle: prop('title', newProject),
			recipients: [email],
			// TODO EMAIL
			// expiry time in seconds
			dareHref: projectHrefBuilder(prop('id', newProject)),
			streamers: compose(map(prop('username')), prop('assignees'))(newProject),
			// TODO EMAIL
			// notClaimedAlready
		}

		sendEmail(emailData, pledgeMadeMail)
	} catch (err) { }

	return {
		...newProject,
		userId,
		pledgeAmount: add(
			viewPledgeAmount(newProject),
			newPledgeAmount,
		),
		pledgers: add(newProject.pledgers, addPledgers),
	}
}
