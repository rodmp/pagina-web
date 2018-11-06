import ajax from 'sls-aws/src/util/ajax'

const clientId = 'bywvja4ootazhbae0qcpwpsnu8glaa'
const baseUrl = 'https://api.twitch.tv/helix/'

// eslint-disable-next-line
export const getUserData = loginArray => ajax({
	url: `${baseUrl}users`,
	headers: { 'Client-ID': clientId },
	queryParams: { login: loginArray },
})
