import {
	LOGIN_ROUTE_ID,
	SIGN_UP_ROUTE_ID,
	VERIFY_ACCOUNT_ROUTE_ID,
	FORGOT_PASSWORD_ROUTE_ID,
	RESET_PASSWORD_ROUTE_ID,
	SIGN_OUT,
	TWITCH_OAUTH_ROUTE_ID,
	TWITCH_OAUTH_ROUTE,
} from 'root/src/shared/descriptions/routes/routeIds'

import {
	LOGIN_FORM_MODULE_ID,
	SIGN_UP_FORM_MODULE_ID,
	VERIFY_ACCOUNT_FORM_MODULE_ID,
	FORGOT_PASSWORD_FORM_MODULE_ID,
	RESET_PASSWORD_FORM_MODULE_ID,
	TWITCH_OAUTH_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import { unAuthValue } from 'root/src/client/logic/route/lenses'

export default {
	[LOGIN_ROUTE_ID]: {
		url: '/sign-in',
		authentication: unAuthValue,
		modules: [LOGIN_FORM_MODULE_ID],
	},
	[SIGN_UP_ROUTE_ID]: {
		url: '/sign-up',
		authentication: unAuthValue,
		modules: [SIGN_UP_FORM_MODULE_ID],
	},
	[VERIFY_ACCOUNT_ROUTE_ID]: {
		url: '/verify-account',
		authentication: unAuthValue,
		modules: [VERIFY_ACCOUNT_FORM_MODULE_ID],
	},
	[FORGOT_PASSWORD_ROUTE_ID]: {
		url: '/forgot-password',
		authentication: unAuthValue,
		modules: [FORGOT_PASSWORD_FORM_MODULE_ID],
	},
	[RESET_PASSWORD_ROUTE_ID]: {
		url: '/reset-password',
		authentication: unAuthValue,
		modules: [RESET_PASSWORD_FORM_MODULE_ID],
	},
	[SIGN_OUT]: {
		url: 'sign-out',
	},
	[TWITCH_OAUTH_ROUTE_ID]: {
		url: '/twitch-oauth',
		modules: [TWITCH_OAUTH_MODULE_ID],
	},
	[TWITCH_OAUTH_ROUTE]: {
		url: 'https://id.twitch.tv/oauth2/authorize?client_id=jl2c2hlcyimcmg466n0jscmlmpcb8j&response_type=token&redirect_uri=http://localhost:8585',
	},
}
