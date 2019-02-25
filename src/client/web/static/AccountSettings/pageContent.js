import {
	CHANGE_PASSWORD_ROUTE_ID,
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'


export default {
	lead: 'Select Action',
	buttons: [
		{
			text: 'Change Password',
			routeId: CHANGE_PASSWORD_ROUTE_ID,
		},
		{
			text: 'Manage Payment',
			routeId: MANAGE_PAYMENT_LIST_ROUTE_ID,
		},
	],
}
