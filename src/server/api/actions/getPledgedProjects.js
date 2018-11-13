import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

export default async ({ userId }) => {
	const userProjectIdParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: [
			`${PARTITION_KEY} = :pk and`,
		].join(' '),
		ExpressionAttributeValues: {
			':pk': `pledge|${userId}`,
		},
	}
	const res = await documentClient.query(userProjectIdParams).promise()
	return res
}
