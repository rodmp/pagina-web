import {
	ACCOUNT_SETTINGS_ROUTE_ID,
	CHANGE_PASSWORD_AUTH_ROUTE_ID,
	MANAGE_PAYMENT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'


import {
	ACCOUNT_SETTINGS_MODULE_ID,
	ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID,
	CHANGE_PASSWORD_AUTH_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

export default {
	[ACCOUNT_SETTINGS_ROUTE_ID]: {
		url: '/account-settings',
		modules: [ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID, ACCOUNT_SETTINGS_MODULE_ID],
	},

	[CHANGE_PASSWORD_AUTH_ROUTE_ID]: {
		url: '/change-password',
		modules: [ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID, CHANGE_PASSWORD_AUTH_MODULE_ID],
	},

	[MANAGE_PAYMENT_ROUTE_ID]: {
		url: '/manage-payment',
	},
}
