import Stripe from 'stripe'
import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { stripeSecretKey } from 'root/src/shared/constants/stripeClient'
import { generalError } from 'root/src/server/api/errors'
import { GSI1_INDEX_NAME, GSI1_PARTITION_KEY } from 'root/src/shared/constants/apiDynamoIndexes'


export default async ({ userId }) => {
	const stripe = Stripe(stripeSecretKey)

	const customerStripeId = {
		TableName: TABLE_NAME,
		IndexName: GSI1_INDEX_NAME,
		KeyConditionExpression: `${GSI1_PARTITION_KEY} = :pk`,
		ExpressionAttributeValues: {
			':pk': `stripe_card|${userId}`,
		},
	}


	const dynamoResults = await documentClient.query(
		customerStripeId,
	).promise()

	if (dynamoResults.Count === 0) {
		throw generalError('You don\'t have payment method')
	}

	const { customerId } = dynamoResults.Item[0]

	const cardList = await stripe.customers.listCards(customerId)

	return {
		status: 200,
		list: cardList,
	}
}
