import { GET_OAUTH_TOKENS, ADD_OAUTH_TOKEN } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default (endpointId, payload) => {
	let options
	if (!payload) {
		options = {
			GET_USERS_TWITCH: GET_OAUTH_TOKENS,
			GET_PROJECT: GET_OAUTH_TOKENS,
			VIEW_PROJECT_MODULE_ID: GET_OAUTH_TOKENS,
			PROJECT: 'TWITCH',
		}
		return options[endpointId]
	} if (payload.authToken) {
		options = {
			GET_USERS_TWITCH: ADD_OAUTH_TOKEN,
		}
		return options[endpointId]
	}
}
