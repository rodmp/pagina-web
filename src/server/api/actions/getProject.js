import { prop, join } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'
import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'


export default async ({ payload }) => {
	const queryStr = join(' ', [
		`${PARTITION_KEY} = :pk`,
		// `${PARTITION_KEY} = :pk and`,
		// `begins_with(${SORT_KEY}, :skProject) or`,
		// `begins_with(${SORT_KEY}, :skAssignee)`,
	])
	const params = {
		TableName: TABLE_NAME,
		KeyConditionExpression: queryStr,
		ExpressionAttributeValues: {
			':pk': prop('id', payload),
			// ':skProject': 'project',
			// ':skAssignee': 'assignee',
		},
	}
	const res = await documentClient.query(params).promise()
	return projectSerializer(dynamoItemsProp(res))
}
