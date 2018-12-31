import nodeAjax from 'sls-aws/src/util/nodeAjax'

const clientId = 'bywvja4ootazhbae0qcpwpsnu8glaa'
const baseUrlNewApi = 'https://api.twitch.tv/helix/'
const baseUrlV5 = 'https://api.twitch.tv/kraken/'

export const getUserData = loginArray => nodeAjax({
	url: `${baseUrlNewApi}users`,
	headers: { 'Client-ID': clientId },
	queryParams: { login: loginArray },
})

export const getGame = gameId => nodeAjax({
	url: `${baseUrlNewApi}search/games`,
	headers: { 'Client-ID': clientId },
	queryParams: { id: gameId },
})

export const searchGames = searchTerm => nodeAjax({
	url: `${baseUrlV5}games`,
	headers: { 'Client-ID': clientId },
	queryParams: { query: searchTerm },
})
