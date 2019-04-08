import { TWITCH_OAUTH_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'
import { GET_USERS_TWITCH } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default {
	[TWITCH_OAUTH_MODULE_ID]: {
		moduleType: 'userData',
		endpointId: GET_USERS_TWITCH,
		externalPayloadMap: [
			['authToken', ':access_token'],
		],
		pageContent: {
			title: 'Account Verified',
			text: "You're all set to accept Dares for",
			link: ACTIVE_PROJECTS_ROUTE_ID,
			linkLabel: 'Go to Marketplace',
		},
	},
}
