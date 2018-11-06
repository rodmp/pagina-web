import { stringify } from 'qs'

export default ({
	url, method, body, queryParams, headers,
}) => new Promise((resolve, reject) => {
	let status = 0
	const queryString = queryParams
		? `?${stringify(queryParams, { indices: false })}` : ''
	return fetch(
		`${url}${queryString}`,
		{
			method: method || 'GET',
			headers: {
				...headers,
				'Content-Type': headers['Content-Type'] || 'application/json',
			},
			body: JSON.stringify(body),
		},
	).then((jsonResponse) => {
		status = jsonResponse.status
		return jsonResponse.text()
	}).then((textResponse) => {
		let parsed = textResponse
		try {
			parsed = JSON.parse(textResponse)
		} catch (e) {
			// response not json, leave parsed as text and continue
		}
		if (status >= 200 && status < 300) {
			resolve(parsed)
		} else {
			reject(parsed)
		}
	})
})
