import nodeAjax from 'sls-aws/src/util/nodeAjax'

import { clientId, baseUrlNewApi } from 'sls-aws/src/constants/twitch'

export const getUserData = loginArray => nodeAjax({
	url: `${baseUrlNewApi}users`,
	headers: { 'Client-ID': clientId },
	queryParams: { id: loginArray },
})

export const getGameData = gameIds => nodeAjax({
	url: `${baseUrlNewApi}games`,
	headers: { 'Client-ID': clientId },
	queryParams: { id: gameIds },
})
