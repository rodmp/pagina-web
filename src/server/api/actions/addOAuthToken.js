import { map } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import oAuthTokenSerializer from 'root/src/server/api/serializers/oAuthTokenSerializer'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

export default async ({ userId, payload }) => {
	const { displayName, login, thumbnail, id, token, tokenId } = payload
	const oAuthToken = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: `token-${tokenId}|${id}`,
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

	return oAuthTokenSerializer(oAuthToken)
}
