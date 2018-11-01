import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { userPk } from 'sls-aws/src/server/api/pkMaker'

import {
	PARTITION_KEY, SORT_KEY, GSI1_INDEX_NAME, GSI1_PARTITION_KEY, GSI1_SORT_KEY,
} from 'sls-aws/src/constants/apiDynamoIndexes'


const schema = {}

// sk: created|funded-projectId-createdDate

export default async (userId, payload) => {
	const userProjectIdParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY}= :pk and begins_with(${SORT_KEY}, :sk)`,
		ExpressionAttributeValues: {
			':pk': userPk(userId),
			':sk': 'pledged',
		},
	}
	const res = await documentClient.query(userProjectIdParams).promise()
	return res
}
