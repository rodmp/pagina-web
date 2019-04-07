import nodeAjax from 'root/src/shared/util/nodeAjax'

import { clientId, baseUrlNewApi } from 'root/src/shared/constants/twitch'

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
