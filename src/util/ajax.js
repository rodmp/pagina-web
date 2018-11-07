import { forEach, toPairs } from 'ramda'
import { stringify } from 'qs'

// export default ({
// 	url, method, body, queryParams, headers,
// }) => new Promise((resolve, reject) => {
// 	let status = 0
// 	const queryString = queryParams
// 		? `?${stringify(queryParams, { indices: false })}` : ''
// 	return fetch(
// 		`${url}${queryString}`,
// 		{
// 			method: method || 'GET',
// 			headers: {
// 				...headers,
// 				'Content-Type': headers['Content-Type'] || 'application/json',
// 			},
// 			body: JSON.stringify(body),
// 		},
// 	).then((jsonResponse) => {
// 		status = jsonResponse.status
// 		return jsonResponse.text()
// 	}).then((textResponse) => {
// 		let parsed = textResponse
// 		try {
// 			parsed = JSON.parse(textResponse)
// 		} catch (e) {
// 			// response not json, leave parsed as text and continue
// 		}
// 		if (status >= 200 && status < 300) {
// 			resolve(parsed)
// 		} else {
// 			reject(parsed)
// 		}
// 	})
// })


export default ({
	url, method, body, queryParams, headers,
}) => new Promise((resolve, reject) => {
	const queryString = queryParams
		? `?${stringify(queryParams, { indices: false })}` : ''
	const xhr = new XMLHttpRequest()
	const jsonBody = body ? JSON.stringify(body) : undefined
	const defaultMethod = method || 'GET'
	const defaultHeaders = {
		...headers,
		'Content-Type': headers['Content-Type'] || 'application/json',
	}
	xhr.open(defaultMethod, `${url}${queryString}`)
	forEach(
		([key, value]) => {
			xhr.setRequestHeader(key, value)
		},
		toPairs(defaultHeaders),
	)
	xhr.onload = () => {
		let parsed = xhr.response
		try {
			parsed = JSON.parse(parsed)
		} catch (e) {
			// response not json, leave parsed as text and continue
		}
		if (xhr.status >= 200 && xhr.status < 300) {
			resolve(parsed)
		} else {
			reject(parsed)
		}
	}
	xhr.onerror = () => {
		reject(new Error('Network Error'))
	}
	xhr.send(jsonBody)
})
