import { uniqBy, prop } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { dynamoItemsProp } from 'root/src/server/api/lenses'
import myProjectsSerializer from 'root/src/server/api/serializers/myProjectsSerializer'
import {
	GSI1_INDEX_NAME, GSI1_PARTITION_KEY,
} from 'root/src/shared/constants/apiDynamoIndexes'

const PageItemLedngth = 8

export default async ({ userId, payload }) => {
	const pledgedProjectsDdb = await documentClient.query({
		TableName: TABLE_NAME,
		IndexName: GSI1_INDEX_NAME,
		KeyConditionExpression: `${GSI1_PARTITION_KEY} = :pk`,
		ExpressionAttributeValues: {
			':pk': `pledge|${userId}`,
		},
	}).promise()

	const favoritesProjectsDdb = await documentClient.query({
		TableName: TABLE_NAME,
		IndexName: GSI1_INDEX_NAME,
		KeyConditionExpression: `${GSI1_PARTITION_KEY} = :pk`,
		ExpressionAttributeValues: {
			':pk': `favorites|${userId}`,
		},
	}).promise()

	const pledgedProjects = dynamoItemsProp(pledgedProjectsDdb)
	const favoritesProjects = dynamoItemsProp(favoritesProjectsDdb)

	const myProjects = uniqBy(prop('pk'), [...pledgedProjects, ...favoritesProjects])

	const allPage = myProjects.length % PageItemLedngth > 0
		? Math.round(myProjects.length / PageItemLedngth) + 1
		: Math.round(myProjects.length / PageItemLedngth)


	let { currentPage } = payload
	if (currentPage === undefined) {
		currentPage = 1
	}
	const projects = myProjects.slice(
		(currentPage - 1) * PageItemLedngth,
		currentPage * PageItemLedngth,
	)

	return {
		allPage,
		currentPage: payload.currentPage,
		interval: PageItemLedngth,
		items: [...myProjectsSerializer(projects)],
	}
}
