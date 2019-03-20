import { map } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

export default async ({ userId, payload }) => {
	const { displayName, login, thumbnail, id, token, tokenId } = payload
	const oAuthToken = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: `${tokenId}|${id}`,
		login,
		thumbnail,
		displayName,
		token,
	}

	const params = {
		RequestItems: {
			[TABLE_NAME]: map(
				Item => ({ PutRequest: { Item } }),
				[oAuthToken],
			),
		},
	}
	await documentClient.batchWrite(params).promise()

	return {
		...oAuthToken,
	}
}
