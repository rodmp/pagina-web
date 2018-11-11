import { prop } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'
import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'


export default async ({ payload }) => {
	const params = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk`,
		ExpressionAttributeValues: {
			':pk': prop('id', payload),
		},
	}
	const res = await documentClient.query(params).promise()
	return projectSerializer(dynamoItemsProp(res))
}
