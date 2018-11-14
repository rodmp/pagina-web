import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import getProject from 'sls-aws/src/server/api/actions/getProject'
import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import { PLEDGE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import {
	getPayloadLenses, getResponseLenses,
} from 'sls-aws/src/server/api/getEndpointDesc'
import pledgeDynamoObj from 'sls-aws/src/server/api/actionUtil/pledgeDynamoObj'
import { generalError } from 'sls-aws/src/server/api/errors'
import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'
import dynamoQueryProject from 'sls-aws/src/server/api/actionUtil/dynamoQueryProject'

const payloadLenses = getPayloadLenses(PLEDGE_PROJECT)
const { viewProjectId, viewPledgeAmount, viewStripeCardId } = payloadLenses
const responseLenses = getResponseLenses(PLEDGE_PROJECT)
const { viewMyPledge } = responseLenses


const scanTable = () => {
	const params = {
		TableName: TABLE_NAME,
	}
	return documentClient.scan(params).promise()
}


export default async ({ userId, payload }) => {
	const projectId = viewProjectId(payload)
	const [projectToPledgeDdb,, myPledgeDdb] = await dynamoQueryProject(
		userId, projectId,
	)
	const projectToPledge = dynamoItemsProp(projectToPledgeDdb)[0]
	if (!projectToPledge) {
		throw generalError('Project doesn\'t exist')
	}
	const myPledge = dynamoItemsProp(myPledgeDdb)[0]
	if (myPledge) {
		throw generalError('You\'ve already pledged this project')
	}
	const newPledgeAmount = viewPledgeAmount(payload)
	const pledge = pledgeDynamoObj(
		projectId, projectToPledge, userId,
		newPledgeAmount, viewStripeCardId(payload),
	)
	const pledgeParams = {
		TableName: TABLE_NAME,
		Item: pledge,
	}
	const res = await documentClient.put(pledgeParams).promise()

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
	const test = await scanTable()
	return res
}
