import {
	LOGIN_ROUTE_ID, SIGNUP_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

import { LOGIN_FORM_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

import { unAuthValue } from 'sls-aws/src/client-logic/route/lenses'


export default {
	[LOGIN_ROUTE_ID]: {
		url: '/login',
		authentication: unAuthValue,
		modules: [
			LOGIN_FORM_MODULE_ID
		],
	},
	[SIGNUP_ROUTE_ID]: {
		url: '/sign-up',
		authentication: unAuthValue,
	}
}
