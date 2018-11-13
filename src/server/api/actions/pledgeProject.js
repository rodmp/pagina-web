import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import getProject from 'sls-aws/src/server/api/actions/getProject'

import { PLEDGE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import {
	getPayloadLenses, getResponseLenses,
} from 'sls-aws/src/server/api/getEndpointDesc'
import pledgeDynamoObj from 'sls-aws/src/server/api/actionUtil/pledgeDynamoObj'
import { generalError } from 'sls-aws/src/server/api/errors'

const payloadLenses = getPayloadLenses(PLEDGE_PROJECT)
const { viewProjectId, viewPledgeAmount, viewStripeCardId } = payloadLenses
const responseLenses = getResponseLenses(PLEDGE_PROJECT)
console.log(responseLenses)
const { viewMyPledge } = responseLenses

export default async ({ userId, payload }) => {
	const projectToPledge = await getProject({ userId, payload })

	if (viewMyPledge(projectToPledge)) {
		throw generalError('You\'ve already pledged this project')
	}
	const newPledgeAmount = viewPledgeAmount(payload)
	const projectId = viewProjectId(payload)
	const pledge = pledgeDynamoObj(
		viewProjectId(payload), projectToPledge, userId,
		newPledgeAmount, viewStripeCardId(payload),
	)
	const pledgeParams = {
		TableName: TABLE_NAME,
		Item: pledge,
	}
	const res = await documentClient.put(pledgeParams).promise()

	const updateProjectParams = {
		TableName: TABLE_NAME,
		Key: { HashKey: projectId },
		UpdateExpression: 'set #pledgeAmount = #pledgeAmount + :newPledgeAmount',
		ExpressionAttributeValues: {
			':newPledgeAmount': newPledgeAmount,
		},
	}
	await documentClient.update(updateProjectParams).promise()

	return res
}
