import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import addPaymentMethodSerializer from 'root/src/server/api/serializers/addPaymentMethodSerializer'
import uuid from 'uuid/v1'

export default async ({ userId, payload }) => {
	const paymentMethod = addPaymentMethodSerializer(payload)
	const putParams = {
		TableName: TABLE_NAME,
		Item: {
			[PARTITION_KEY]: userId,
			[SORT_KEY]: `creditCard|${uuid()}`,
			...paymentMethod,
		},
	}
	await documentClient.put(putParams).promise()
	return paymentMethod
}
