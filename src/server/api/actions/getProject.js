import { prop } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'
import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'

export default async ({ payload }) => {
	const pk = prop('id', payload)
	const projectParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :project)`,
		ExpressionAttributeValues: {
			':pk': pk,
			':project': 'project',
		},
	}
	const assigneeParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :assignee)`,
		ExpressionAttributeValues: {
			':pk': pk,
			':assignee': 'assignee',
		},
	}
	const [project, assignee] = await Promise.all([
		documentClient.query(projectParams).promise(),
		documentClient.query(assigneeParams).promise(),
	])
	return projectSerializer([
		...dynamoItemsProp(project),
		...dynamoItemsProp(assignee),
	])
}
