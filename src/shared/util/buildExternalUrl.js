export default (api, endpoint) => {
	let urlBase
	switch (api) {
		case 'TWITCH':
			urlBase = 'https://api.twitch.tv/helix/'
			break
		default:
	}
	const urlEndpoint = endpoint.toLowerCase()
	return (urlBase + urlEndpoint)
}
