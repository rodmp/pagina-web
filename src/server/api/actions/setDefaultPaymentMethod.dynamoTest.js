import { map, range, prop, find, propEq, last, split } from 'ramda'

import { apiFn } from 'root/src/server/api'

import { SET_DEFAULT_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'
import addPaymentMethodPayload from 'root/src/server/api/mocks/addPaymentMethodPayload'
import addPaymentMethod from 'root/src/server/api/actions/addPaymentMethod'

import { mockUserId } from 'root/src/server/api/mocks/contextMock'

describe('getPendingProjects', () => {
	test('Successfully set default payment method, then sets another', async () => {
		const [paymentMethod1, paymentMethod2] = await Promise.all(
			map(
				() => addPaymentMethod({
					userId: mockUserId,
					payload: addPaymentMethodPayload(),
				}),
				range(1, 3),
			),
		)

		const firstEvent = {
			endpointId: SET_DEFAULT_PAYMENT_METHOD,
			authentication: mockUserId,
			payload: prop('id', paymentMethod1),
		}

		const secondEvent = {
			endpointId: SET_DEFAULT_PAYMENT_METHOD,
			authentication: mockUserId,
			payload: prop('id', paymentMethod2),
		}

		const res1 = await apiFn(firstEvent)
		const res2 = await apiFn(secondEvent)

		const id1 = prop('id', paymentMethod1)
		const id2 = prop('id', paymentMethod2)

		const defaultCard1 = find(propEq('sk', `paymentMethod|${id1}`), res1.body)
		const defaultCard2 = find(propEq('sk', `paymentMethod|${id2}`), res2.body)

		const notDefaultCard1 = find(propEq('sk', `paymentMethod|${id2}`), res1.body)
		const notDefaultCard2 = find(propEq('sk', `paymentMethod|${id1}`), res2.body)

		expect(defaultCard1.isDefault).toBe(true)
		expect(defaultCard2.isDefault).toBe(true)
		expect(notDefaultCard1.isDefault).toBe(false)
		expect(notDefaultCard2.isDefault).toBe(false)
	})
})
