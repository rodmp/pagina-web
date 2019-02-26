import {
	CHANGE_PASSWORD_AUTH_ROUTE_ID,
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'


export default {
	lead: 'Select Action',
	buttons: [
		{
			text: 'Change Password',
			routeId: CHANGE_PASSWORD_AUTH_ROUTE_ID,
		},
		{
			text: 'Manage Payment',
			routeId: MANAGE_PAYMENT_LIST_ROUTE_ID,
		},
	],
}
