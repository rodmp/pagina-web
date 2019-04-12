import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import dynamoQueryPaymentMethods from 'root/src/server/api/actionUtil/dynamoQueryPaymentMethods'

import { map, prop, set, lensProp, equals } from 'ramda'

export default async ({ userId, payload }) => {
	const stripeCardId = payload
	const cardId = `paymentMethod|${stripeCardId}`
	const userPaymentMethods = await dynamoQueryPaymentMethods(userId)

	const setDefault = (paymentMethod) => {
		const actualCardId = prop('sk', paymentMethod)
		if (equals(actualCardId, cardId)) {
			return set(lensProp('isDefault'), true, paymentMethod)
		}
		return set(lensProp('isDefault'), false, paymentMethod)
	}

	const cardSet = map(setDefault, prop('Items', userPaymentMethods))

	const batchParams = {
		RequestItems: {
			[TABLE_NAME]: map(
				Item => ({ PutRequest: { Item } }),
				cardSet,
			),
		},
	}

	await documentClient.batchWrite(batchParams).promise()
	return cardSet
}
