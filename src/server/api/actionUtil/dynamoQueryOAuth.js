import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import { dynamoItemsProp } from 'root/src/server/api/lenses'

export default (async (userId) => {
	const oAuthParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :token)`,
		ExpressionAttributeValues: {
			':pk': `user-${userId}`,
			':token': 'token',
		},
		ConsistentRead: true,
	}

	const [oAuthDb] = await Promise.all([
		documentClient.query(oAuthParams).promise(),
	])

	return [
		dynamoItemsProp(oAuthDb),
	]
})
