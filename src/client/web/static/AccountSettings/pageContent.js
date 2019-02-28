import {
	CHANGE_PASSWORD_ROUTE_ID,
	MANAGE_PAYMENT_ROUTE_ID,
	TWITCH_OAUTH_ROUTE,
} from 'root/src/shared/descriptions/routes/routeIds'

export default {
	lead: 'Select Action',
	buttons: [
		{
			text: 'Change Password',
			routeId: CHANGE_PASSWORD_ROUTE_ID,
		},
		{
			text: 'Manage Payment',
			routeId: MANAGE_PAYMENT_ROUTE_ID,
		},
		{
			text: 'Oauth Channel',
			href: TWITCH_OAUTH_ROUTE,
		},
	],
}
