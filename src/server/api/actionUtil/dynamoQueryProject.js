import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import { dynamoItemsProp } from 'root/src/server/api/lenses'


export default async (userId, projectId) => {
	const projectParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :project)`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':project': 'project',
		},
		ConsistentRead: true,
	}
	// Don't have to grab these anymore cause they are de-normalized on project
	// ...may have to make a toggle for this fn though
	// const assigneeParams = {
	// 	TableName: TABLE_NAME,
	// 	KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :assignee)`,
	// 	ExpressionAttributeValues: {
	// 		':pk': projectId,
	// 		':assignee': 'assignee',
	// 	},
	// 	ConsistentRead: true,
	// }
	// const gameParams = {
	// 	TableName: TABLE_NAME,
	// 	KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :game)`,
	// 	ExpressionAttributeValues: {
	// 		':pk': projectId,
	// 		':game': 'game',
	// 	},
	// 	ConsistentRead: true,
	// }
	const myPledgeParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and ${SORT_KEY} = :pledgeUserId`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':pledgeUserId': `pledge|${userId}`,
		},
		ConsistentRead: true,
	}

	const myFavoritesParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and ${SORT_KEY} = :favoritesUserId`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':favoritesUserId': `favorites|${userId}`,
		},
		ConsistentRead: true,
	}

	const [projectDdb, /* assigneesDdb, gamesDdb, */ myPledgeDdb, myFavoritesDdb] = await Promise.all([
		documentClient.query(projectParams).promise(),
		// documentClient.query(assigneeParams).promise(),
		// documentClient.query(gameParams).promise(),
		documentClient.query(myPledgeParams).promise(),
		documentClient.query(myFavoritesParams).promise(),
	])

	return [
		dynamoItemsProp(projectDdb),
		// dynamoItemsProp(assigneesDdb),
		// dynamoItemsProp(gamesDdb),
		dynamoItemsProp(myPledgeDdb),
		dynamoItemsProp(myFavoritesDdb),
	]
}
