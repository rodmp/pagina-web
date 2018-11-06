import {
	split, last, forEach, concat, map, prop, contains,
} from 'ramda'

import { getUserData } from 'sls-aws/src/server/api/twitchApi'

export default (assigneeArray) => {
	const promises = []
	const twitchUsernames = []
	forEach((assigneeObj) => {
		const streamerUrl = prop('url', assigneeObj)
		if (contains('twitch.tv', streamerUrl)) {
			twitchUsernames.push(last(split('/', streamerUrl)))
		}
	}, assigneeArray)
	if (twitchUsernames.length) {
		promises.push(getUserData(twitchUsernames).then(res => map(
			userData => ({
				platform: 'twitch',
				image: prop('profile_image_url', userData),
				platformId: prop('display_name', userData),
			}),
			prop('data', res),
		)))
	}
	return Promise.all(promises).then(res => concat(...res))
}
