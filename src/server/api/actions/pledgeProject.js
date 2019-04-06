import { head, add } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import { PLEDGE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import pledgeDynamoObj from 'root/src/server/api/actionUtil/pledgeDynamoObj'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'

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

	const newPledgeAmount = viewPledgeAmount(payload)
	const newPledge = pledgeDynamoObj(
		projectId, projectToPledge, userId,
		newPledgeAmount, viewStripeCardId(payload),
	)

	const { pledgeAmount } = projectToPledge

	// TODO: Check pledge amount
	const pledgeParams = {
		TableName: TABLE_NAME,
		Item: newPledge,
	}
	await documentClient.put(pledgeParams).promise()

	const updateProjectParams = {
		TableName: TABLE_NAME,
		Key: {
			[PARTITION_KEY]: projectToPledge[PARTITION_KEY],
			[SORT_KEY]: projectToPledge[SORT_KEY],
		},
		UpdateExpression: 'SET pledgeAmount = :newPledgeAmount',
		ExpressionAttributeValues: {
			':newPledgeAmount': pledgeAmount + newPledgeAmount,
		},
	}

	await documentClient.update(updateProjectParams).promise()

	const newProject = projectSerializer([
		...projectToPledgeDdb,
		newPledge,
	])

	return {
		...newProject,
		userId,
		pledgeAmount: add(
			viewPledgeAmount(newProject),
			newPledgeAmount,
		),
	}
}
