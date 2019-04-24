import { map, range, prop, find, propEq } from 'ramda'

import { apiFn } from 'root/src/server/api'

import { DELETE_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'
import addPaymentMethodPayload from 'root/src/server/api/mocks/addPaymentMethodPayload'
import addPaymentMethod from 'root/src/server/api/actions/addPaymentMethod'
import getPaymentMethods from 'root/src/server/api/actions/getPaymentMethods'

import { mockUserId } from 'root/src/server/api/mocks/contextMock'

describe('getPendingProjects', () => {
	test('Successfully creates two payment methods then deletes both', async () => {
		const [paymentMethod1, paymentMethod2] = await Promise.all(
			map(
				() => addPaymentMethod({
					userId: mockUserId,
					payload: addPaymentMethodPayload(),
				}),
				range(1, 3),
			),
		)

		let paymentMethods = await getPaymentMethods({ userId: mockUserId })

		expect(paymentMethods.items.length).toEqual(2)

		const firstEvent = {
			endpointId: DELETE_PAYMENT_METHOD,
			authentication: mockUserId,
			payload: prop('id', paymentMethod1),
		}

		await apiFn(firstEvent)

		const fakeEvent = {
			endpointId: DELETE_PAYMENT_METHOD,
			authentication: mockUserId,
			payload: '1232113',
		}

		await apiFn(fakeEvent)

		paymentMethods = await getPaymentMethods({ userId: mockUserId })

		expect(paymentMethods.items.length).toEqual(1)

		const secondEvent = {
			endpointId: DELETE_PAYMENT_METHOD,
			authentication: mockUserId,
			payload: prop('id', paymentMethod2),
		}

		await apiFn(secondEvent)

		paymentMethods = await getPaymentMethods({ userId: mockUserId })

		expect(paymentMethods.items.length).toEqual(0)
	})
})
