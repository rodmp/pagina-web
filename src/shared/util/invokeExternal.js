import buildExternalUrl from 'root/src/shared/util/buildExternalUrl'

import ajax from 'root/src/shared/util/ajax'

export default ({ endpointId, payload }) => {
	const request = endpointId.split('_')
	const [method, endpoint, api] = request
	const url = buildExternalUrl(api, endpoint)
	const headers = {
		Authorization: `Bearer ${payload.authToken}`,
		'Content-Type': 'appllication/json',
	}
	switch (method) {
		case 'GET':
			return ajax({ url, headers })
				.then(({ data, status }) => ({
					displayName: data[0].display_name,
					login: data[0].login,
					thumbnail: data[0].profile_image_url,
					id: data[0].id,
					token: headers.Authorization,
					status,
				}))
		default:
	}
}
