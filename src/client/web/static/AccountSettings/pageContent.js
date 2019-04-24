import {
	CHANGE_PASSWORD_FORM_ROUTE_ID,
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import { twitchOauthUrl } from 'root/src/shared/constants/twitch'


export default {
	lead: 'Select Action',
	buttons: [
		{
			text: 'Change Password',
			routeId: CHANGE_PASSWORD_FORM_ROUTE_ID,
		},
		{
			text: 'Manage Payment',
			routeId: MANAGE_PAYMENT_LIST_ROUTE_ID,
		},
		{
			text: 'Oauth Channel',
			href: twitchOauthUrl,
		},
	],
}
