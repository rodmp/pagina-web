import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import partialDareSerializer from 'root/src/server/api/serializers/partialDareSerializer'
import moment from 'moment'

export default async ({ userId, payload }) => {
	const project = partialDareSerializer(payload)

	const partialId = `dareFormPartial|${payload.id}`
	const created = moment().format()

	const partial = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: partialId,
		...project,
		created,
	}

	const putParams = {
		TableName: TABLE_NAME,
		Item: {
			...partial,
		},
	}

	await documentClient.put(putParams).promise()
	return partial
}
