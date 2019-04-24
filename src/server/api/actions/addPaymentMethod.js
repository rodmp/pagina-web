import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import addPaymentMethodSerializer from 'root/src/server/api/serializers/addPaymentMethodSerializer'

export default async ({ userId, payload }) => {
	const paymentMethod = addPaymentMethodSerializer(payload)
	const putParams = {
		TableName: TABLE_NAME,
		Item: {
			[PARTITION_KEY]: userId,
			...paymentMethod,
		},
	}
	await documentClient.put(putParams).promise()
	return { ...payload, id: payload.stripeCardId }
}
