import { prop } from 'ramda'
import axios from 'axios'

export default ({ endpointId, payload }) => {
	const method = endpointId.split('_')[0]
	switch (method) {
		case 'GET':
			return axios.get('https://google.pl', false)
				.then(res => JSON.parse(prop('Payload', res)))
		case 'POST':
			return axios.post(`https://id.twitch.tv/oauth2/revoke?client_id=jl2c2hlcyimcmg466n0jscmlmpcb8j&token=${payload.authToken}`)
				.then(res => res)
		default:
	}
}
