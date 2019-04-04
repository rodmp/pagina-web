import { head, add } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import favoritesDynamoObj from 'root/src/server/api/actionUtil/favoritesDynamoObj'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'


export default async ({ userId, payload }) => {
	const { projectId } = payload
	const [
		projectToFavoritesDdb, myPledgeDdb, myFavoritesDdb,
	] = await dynamoQueryProject(
		userId, projectId,
	)

	const projectToFavorites = head(projectToFavoritesDdb)
	if (!projectToFavorites) {
		throw generalError('Project doesn\'t exist')
	}

	const myFavorites = head(myFavoritesDdb || []);

	if (myFavorites) {
		throw generalError('You\'ve already added this project to your favorites')
	}

	const newFavorites = favoritesDynamoObj(
		projectId, projectToFavorites, userId,
	)

	// TODO: Check favorites
	const favoritesParams = {
		TableName: TABLE_NAME,
		Item: newFavorites,
	}
	await documentClient.put(favoritesParams).promise()

	const updateProjectParams = {
		TableName: TABLE_NAME,
		Key: {
			[PARTITION_KEY]: projectToFavorites[PARTITION_KEY],
			[SORT_KEY]: projectToFavorites[SORT_KEY],
		},
		UpdateExpression: 'set favoritesAmount = favoritesAmount + 1',
	}

	await documentClient.update(updateProjectParams).promise();

	const newProject = projectSerializer([
		...projectToFavoritesDdb,
		//...assigneesDdb,
		//...gamesDdb,
		newFavorites,
	])
	return {
		...newProject
	}
}
