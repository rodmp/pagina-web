import { map, range, reduce } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { dynamoItemsProp } from 'root/src/server/api/lenses'

import listResults from 'root/src/server/api/actionUtil/listResults'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'

import {
	GSI1_INDEX_NAME, GSI1_PARTITION_KEY,
} from 'root/src/shared/constants/apiDynamoIndexes'

const PageItemLedngth = 8

export default async (status, payload) => {
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
			range(1, 11),
		),
	)
	// This can be optimized:
	const combinedProjects = reduce(
		(result, projectDdb) => [...result, ...dynamoItemsProp(projectDdb)],
		[],
		shardedProjects,
	)


	const allPage = combinedProjects.length % PageItemLedngth > 0
		? Math.round(combinedProjects.length / PageItemLedngth) + 1
		: Math.round(combinedProjects.length / PageItemLedngth)

	let { currentPage } = payload.payload
	if (currentPage === undefined) {
		currentPage = 1
	}
	const projects = combinedProjects.slice(
		(currentPage - 1) * PageItemLedngth,
		currentPage * PageItemLedngth,
	)

	return {
		allPage,
		currentPage: payload.currentPage,
		interval: PageItemLedngth,
		...listResults({
			dynamoResults: { Items: map(project => [project], projects) },
			serializer: projectSerializer,
		}),
	}
}
