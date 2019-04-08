import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { map } from 'ramda'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

export default async ({ payload: { userId, partialKeys } }) => {
	const partialIds = map(key => `dareFormPartial|${key}`, partialKeys)

	const transactParams = {
		TransactItems: [...map(
			id => ({
				Delete: {
					TableName: TABLE_NAME,
					Key: {
						[PARTITION_KEY]: userId,
						[SORT_KEY]: id,
					},
				},
			}),
			partialIds,
		)],
	}

	await documentClient.transactWrite(transactParams).promise()
	return { message: 'success' }
}
