import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

import {
	DARE_CREATE_SUCCESS_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

import { googleAnalytics } from 'root/src/client/logic/analytics/thunks/googleAnalytics'

// import ReactGA from 'react-ga'
// import { googleTag } from 'root/src/shared/constants/pageData'

// ReactGA.initialize(googleTag)
// ReactGA.pageview(window.location.pathname + window.location.search)

export default ({ body }) => async (dispatch) => {
	const ecommerceData = {
		id: '1234',
		name: 'Fluffy Pink Bunnies',
		sku: 'DD23444',
		category: 'Party Toys',
		price: '11.99',
		quantity: '1',
	}
	const transactionData = {
		id: '1234', // Transaction ID. Required.
		affiliation: 'Acme Clothing', // Affiliation or store name.
		revenue: '11.99', // Grand Total.
		shipping: '5', // Shipping.
		tax: '1.29', // Tax.
	}

	googleAnalytics.plugin.require('ecommerce')
	googleAnalytics.plugin.execute('ecommerce', 'addTransaction', transactionData)
	googleAnalytics.plugin.execute('ecommerce', 'addItem', ecommerceData)
	googleAnalytics.plugin.execute('ecommerce', 'send')
	googleAnalytics.plugin.execute('ecommerce', 'clear')
	return dispatch(
		pushRoute(DARE_CREATE_SUCCESS_ROUTE_ID),
	)
}
