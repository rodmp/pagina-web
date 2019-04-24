import listResults from 'root/src/server/api/actionUtil/listResults'
import paymentMethodSerializer from 'root/src/server/api/serializers/paymentMethodSerializer'
import dynamoQueryPaymentMethods from 'root/src/server/api/actionUtil/dynamoQueryPaymentMethods'

export default async ({ userId }) => {
	const dynamoResults = await dynamoQueryPaymentMethods(userId)
	return listResults({
		dynamoResults,
		serializer: paymentMethodSerializer,
	})
}
