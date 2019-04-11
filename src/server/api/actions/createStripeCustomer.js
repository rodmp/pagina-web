import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { stripeSecretKey } from 'root/src/shared/constants/stripeClient'
import { CREATE_STRIPE_CUSTOMER } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { PARTITION_KEY, SORT_KEY, GSI1_INDEX_NAME, GSI1_PARTITION_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import Stripe from 'stripe'

const payloadLenses = getPayloadLenses(CREATE_STRIPE_CUSTOMER)

export default async ({ userId, payload }) => {
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
		const customer = await stripe.customers.create({
			description: userId,
		})

		await stripe.customers.createSource(
			customer.id,
			{ source: payload.token },
		)

		const stripeCustomer = {
			TableName: TABLE_NAME,
			Item: {
				[PARTITION_KEY]: userId,
				[SORT_KEY]: `stripe_card|${userId}`,
				customerStripeId: customer.id,
			},
		}

		await documentClient.put(stripeCustomer).promise()

		return {
			status: 200,
			message: 'Create new customer object',
		}
	}

	await stripe.customers.createSource(
		dynamoResults.Item.customerStripeId,
		{ source: payload.token },
	)

	return {
		status: 200,
		message: 'Add new card in customer object',
	}
}
