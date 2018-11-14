import { head, add } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import { PLEDGE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'sls-aws/src/server/api/getEndpointDesc'
import pledgeDynamoObj from 'sls-aws/src/server/api/actionUtil/pledgeDynamoObj'
import { generalError } from 'sls-aws/src/server/api/errors'
import dynamoQueryProject from 'sls-aws/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'

const payloadLenses = getPayloadLenses(PLEDGE_PROJECT)
const { viewProjectId, viewPledgeAmount, viewStripeCardId } = payloadLenses

export default async ({ userId, payload }) => {
	const projectId = viewProjectId(payload)
	const [
		projectToPledgeDdb, assigneesDdb, myPledgeDdb,
	] = await dynamoQueryProject(
		userId, projectId,
	)
	const projectToPledge = head(projectToPledgeDdb)
	if (!projectToPledge) {
		throw generalError('Project doesn\'t exist')
	}
	const myPledge = head(myPledgeDdb)
	if (myPledge) {
		throw generalError('You\'ve already pledged this project')
	}
	const newPledgeAmount = viewPledgeAmount(payload)
	const newPledge = pledgeDynamoObj(
		projectId, projectToPledge, userId,
		newPledgeAmount, viewStripeCardId(payload),
	)
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
		UpdateExpression: 'set pledgeAmount = pledgeAmount + :newPledgeAmount',
		ExpressionAttributeValues: {
			':newPledgeAmount': newPledgeAmount,
		},
	}
	await documentClient.update(updateProjectParams).promise()
	const newProject = projectSerializer([
		...projectToPledgeDdb,
		...assigneesDdb,
		newPledge,
	])
	return {
		...newProject,
		pledgeAmount: add(
			viewPledgeAmount(newProject),
			viewPledgeAmount(newPledge),
		),
	}
}
