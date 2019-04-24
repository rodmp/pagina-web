import { map, range } from 'ramda'

import { apiFn } from 'root/src/server/api'

import wait from 'root/src/testUtil/wait'

import { GET_PAYMENT_METHODS } from 'root/src/shared/descriptions/endpoints/endpointIds'
import addPaymentMethodPayload from 'root/src/server/api/mocks/addPaymentMethodPayload'
import addPaymentMethod from 'root/src/server/api/actions/addPaymentMethod'

import { mockUserId } from 'root/src/server/api/mocks/contextMock'

describe('getPendingProjects', () => {
	test('Successfully get payment methods', async () => {
		await Promise.all(
			map(
				() => addPaymentMethod({
					userId: mockUserId,
					payload: addPaymentMethodPayload(),
				}),
				range(1, 3),
			),
		)
		const event = {
			endpointId: GET_PAYMENT_METHODS,
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		expect(res.body.items.length).toEqual(2)
	})
})
