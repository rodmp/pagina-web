import React, { memo, useState } from 'react'

import {
	StripeProvider, Elements,
} from 'react-stripe-elements'

import { stripeClientId } from 'root/src/shared/constants/stripeClient'
import fieldInputConnector from 'root/src/client/logic/form/connectors/fieldInputConnector'
import StripeFields from 'root/src/client/web/form/StripeFields'
import StripeList from 'root/src/client/web/form/StripeFields/StripeLists'
import { ternary } from 'root/src/shared/util/ramdaPlus'
import stripeFieldConnector from 'root/src/client/logic/form/connectors/stripeFieldConnector'

export const StripeCardUnconnected = memo(({
	moduleKey, fieldPath, setInput, cardList,
}) => {
	const [listView = cardList.length > 0, setListView] = useState()
	return (
		<StripeProvider apiKey={stripeClientId}>
			<div>
				{ternary(
					listView,
					(
						<Elements>
							<StripeList
								list={cardList}
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

export default stripeFieldConnector(StripeCardUnconnected)
