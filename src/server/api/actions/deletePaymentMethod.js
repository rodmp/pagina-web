import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import dynamoQueryPaymentMethod from 'root/src/server/api/actionUtil/dynamoQueryPaymentMethod'

export default async ({ userId, payload }) => {
	const paymentMethod = await dynamoQueryPaymentMethod(userId, payload.cardId)
	if (paymentMethod.Count === 0) {
		return {
			status: 404,
			message: 'Payment method not found',
		}
	}
	const paymentMethodParams = {
		TableName: TABLE_NAME,
		Key: {
			[PARTITION_KEY]: userId,
			[SORT_KEY]: `creditCard|${payload.cardId}`,
		},
	}
	await documentClient.delete(paymentMethodParams).promise()
	return {
		status: 200,
		message: 'Successfully deleted',
	}
}
