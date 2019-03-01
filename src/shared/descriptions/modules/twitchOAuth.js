import { TWITCH_OAUTH_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'
// import { ACTIVE_PROJECTS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'
import { GET_PROJECT, GET_USERS_TWITCH } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default {
	[TWITCH_OAUTH_MODULE_ID]: {
		moduleType: 'external',
		endpointId: GET_USERS_TWITCH,
		// endpointId: GET_PROJECT,
		// pageContent: {
		// 	title: 'Account Verified',
		// 	text: 'You\'re all set to accept Dares for ',
		// 	link: ACTIVE_PROJECTS_ROUTE_ID,
		// 	linkLabel: 'Go to Marketplace',
		// },
		externalPayloadMap: [
			['authToken', ':access_token'],
		],
	},
}
