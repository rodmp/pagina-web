import React, { memo, useState } from 'react'

import {
	StripeProvider, Elements,
} from 'react-stripe-elements'

import { stripeClientId } from 'root/src/shared/constants/stripeClient'
import fieldInputConnector from 'root/src/client/logic/form/connectors/fieldInputConnector'
import StripeFields from 'root/src/client/web/form/StripeFields'
import StripeList from 'root/src/client/web/form/StripeFields/StripeLists'
import { ternary } from 'root/src/shared/util/ramdaPlus'


const list = [
	{
		cardType: 'Visa',
		last4: '4242 4242 4242 4242',
		pk: 'John',
		sk: 'Doe',
		cvv: '7777',
		expireMonth: '01',
		expireYear: '30',
		id: '3454443',
	},
	{
		cardType: 'Mastercard',
		last4: '4242 4242 4242 4242',
		pk: 'John',
		sk: 'Doe',
		expireMonth: '01',
		expireYear: '30',
		cvv: '7777',
		id: '54345433',
	},
]

export const StripeCardUnconnected = memo(({
	moduleKey, fieldPath, setInput,
}) => {
	const [listView = true, setListView] = useState()
	return (
		<StripeProvider apiKey={stripeClientId}>
			<div>
				{ternary(
					listView && list.length > 0,
					(
						<Elements>
							<StripeList
								list={list}
								setView={setListView}
								moduleKey={moduleKey}
								fieldPath={fieldPath}
								setInput={setInput}
							/>
						</Elements>
					),
					(
						<Elements>
							<StripeFields
								moduleKey={moduleKey}
								fieldPath={fieldPath}
								setInput={setInput}
							/>
						</Elements>
					),
				)
				}
			</div>
		</StripeProvider>
	)
})

export default fieldInputConnector(StripeCardUnconnected)
