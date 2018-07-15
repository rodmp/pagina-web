import {
	LOGIN_ROUTE_ID, SIGNUP_ROUTE_ID,
} from 'sls-aws/src/client-logic/route/constants/routes/routeIds'

export default {
	[LOGIN_ROUTE_ID]: {
		url: '/login',
	},
	[SIGNUP_ROUTE_ID]: {
		url: '/sign-up',
	}
}
