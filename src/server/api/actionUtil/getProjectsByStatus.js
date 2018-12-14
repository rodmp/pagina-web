import { map, range, reduce } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'
import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'

import listResults from 'sls-aws/src/server/api/actionUtil/listResults'
import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'

import {
	GSI1_INDEX_NAME, GSI1_PARTITION_KEY,
} from 'sls-aws/src/constants/apiDynamoIndexes'

export default async (status) => {
	const shardedProjects = await Promise.all(
		map(
			index => documentClient.query({
				TableName: TABLE_NAME,
				IndexName: GSI1_INDEX_NAME,
				KeyConditionExpression: `${GSI1_PARTITION_KEY} = :pk`,
				ExpressionAttributeValues: {
					':pk': `project|${status}|${index}`,
				},
			}).promise(),
			range(1, 10),
		),
	)
	// This can be optimized:
	const combinedProjects = reduce(
		(result, projectDdb) => [...result, ...dynamoItemsProp(projectDdb)],
		[],
		shardedProjects,
	)
	return listResults({
		dynamoResults: { Items: map(project => [project], combinedProjects) },
		serializer: projectSerializer,
	})
}
