import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import dynamoQueryPaymentMethod from 'root/src/server/api/actionUtil/dynamoQueryPaymentMethod'

export default async ({ userId, payload }) => {
	const paymentMethod = await dynamoQueryPaymentMethod(userId, payload)
	if (paymentMethod.Count === 0) {
		throw new Error({
			statusCode: 404,
			generalErrors: 'Payment method not found',
		})
	}
	const paymentMethodParams = {
		TableName: TABLE_NAME,
		Key: {
			[PARTITION_KEY]: userId,
			[SORT_KEY]: payload,
		},
	}
	await documentClient.delete(paymentMethodParams).promise()
	return {
		status: 200,
		message: 'Successfully deleted',
	}
}
