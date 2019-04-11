import { apiFn } from 'root/src/server/api'

import { CREATE_STRIPE_CUSTOMER } from 'root/src/shared/descriptions/endpoints/endpointIds'
import createStripeCardDate from 'root/src/server/api/mocks/createStripeDatePayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'


const event = {
	endpointId: CREATE_STRIPE_CUSTOMER,
	payload: createStripeCardDate(),
	authentication: mockUserId,
}


describe('create stripe customer', () => {
	test('create', async () => {
		const res = await apiFn(event)
		expect(res).toEqual({
			body: {
				status: 200,
				message: 'Create new customer object' },
			statusCode: 200 })
	})
})
