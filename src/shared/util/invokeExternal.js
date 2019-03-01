import axios from 'axios'
import buildExternalUrl from 'root/src/shared/util/buildExternalUrl'

export default ({ endpointId, payload }) => {
	const request = endpointId.split('_')
	const [method, endpoint, api] = request
	const url = buildExternalUrl(api, endpoint)
	switch (method) {
		case 'GET':
			return axios.get(url, {
				headers: {
					Authorization: `Bearer ${payload.authToken}`,
				},
			})
				.then(({ config, status, data: { data } }) => ({
					displayName: data[0].display_name,
					login: data[0].login,
					thumbnail: data[0].profile_image_url,
					id: data[0].id,
					token: config.headers.Authorization,
					status,
				}))
		default:
	}
}
