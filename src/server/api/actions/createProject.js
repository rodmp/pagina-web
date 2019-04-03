import uuid from 'uuid/v1'
import { map, pick, omit, prop, join } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import assigneeSerializer from 'root/src/server/api/serializers/assigneeSerializer'

import sendEmail from 'root/src/server/email/actions/sendEmail'
import dareCreatedEmail from 'root/src/server/email/templates/dareCreated'
import { dareCreatedTitle } from 'root/src/server/email/util/emailTitles'

import { CREATE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import projectDenormalizeFields from 'root/src/server/api/actionUtil/projectDenormalizeFields'
import pledgeDynamoObj from 'root/src/server/api/actionUtil/pledgeDynamoObj'
import randomNumber from 'root/src/shared/util/randomNumber'
import { projectPendingKey } from 'root/src/server/api/lenses'
import getUserEmail from 'root/src/server/api/actionUtil/getUserEmail'

const payloadLenses = getPayloadLenses(CREATE_PROJECT)
const {
	viewStripeCardId, viewPledgeAmount, viewAssignees, viewGames,
} = payloadLenses

export default async ({ userId, payload }) => {
	const serializedProject = await assigneeSerializer({
		project: payload, payloadLenses,
	})

	const projectId = `project-${uuid()}`

	const projectCommon = projectDenormalizeFields(serializedProject)

	const created = Date.now()

	const pledgeAmount = viewPledgeAmount(serializedProject)

	const project = {
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: `project|${projectPendingKey}|${randomNumber(1, 10)}`,
		created,
		...projectCommon,
	}

	const projectAssignees = map(assignee => ({
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: join('|', [
			'assignee',
			prop('platform', assignee),
			prop('platformId', assignee),
		]),
		...omit(['platform', 'platformId'], assignee),
	}), viewAssignees(serializedProject))

	const projectGames = map(game => ({
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: join('|', [
			'game',
			prop('id', game),
		]),
		...omit(['id'], game),
	}), viewGames(serializedProject))

	const pledge = pledgeDynamoObj(
		projectId, serializedProject, userId, pledgeAmount,
		viewStripeCardId(serializedProject), true,
	)

	const params = {
		RequestItems: {
			[TABLE_NAME]: map(
				Item => ({ PutRequest: { Item } }),
				[project, ...projectAssignees, ...projectGames, pledge],
			),
		},
	}

	await documentClient.batchWrite(params).promise()

	try {
		const email = await getUserEmail(userId)

		const emailData = {
			dareTitle: project.title,
			recipients: [email],
			title: dareCreatedTitle,
		}
		sendEmail(emailData, dareCreatedEmail)
	} catch (err) { }

	return {
		id: projectId,
		status: projectPendingKey,
		...projectCommon,
	}
}
