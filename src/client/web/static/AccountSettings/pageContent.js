import {
	CHANGE_PASSWORD_ROUTE_ID,
	MANAGE_PAYMENT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import { twitchApiUrl } from 'root/cfOutput'

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
			href: twitchApiUrl,
		},
	],
}
