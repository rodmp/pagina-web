import { apiFn } from 'root/src/server/api'

import { ADD_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'

import addPaymentMethodPayload from 'root/src/server/api/mocks/addPaymentMethodPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'

const payload = addPaymentMethodPayload()
const event = {
	endpointId: ADD_PAYMENT_METHOD,
	payload,
	authentication: mockUserId,
}

describe('auditProject', () => {
	test('successfully add a payment method', async () => {
		const res = await apiFn(event)
		expect(res.statusCode).toEqual(200)
	})
})
