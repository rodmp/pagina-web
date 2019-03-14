import { path, prop, map } from 'ramda'
// import stringFormat from 'string-format'

import ajax from 'root/src/shared/util/ajax'
import moduleDescriptions from 'root/src/shared/descriptions/modules'
import moduleIdFromKey from 'root/src/client/logic/route/util/moduleIdFromKey'

import { clientId, baseUrlV5 } from 'root/src/shared/constants/twitch'

const promiseTypeMap = {
	twitchChannels: async (input) => {
		try {
			const searchResults = await ajax({
				url: `${baseUrlV5}search/channels`,
				headers: { 'Client-ID': clientId },
				queryParams: { query: input, type: 'suggest' },
			})
			return map(
				// eslint-disable-next-line camelcase
				({ display_name, _id, logo }) => ({
					label: display_name,
					id: _id,
					value: _id,
					image: logo,
				}),
				prop('channels', searchResults),
			)
		} catch (e) {
			return []
		}
	},
	twitchGames: async (input) => {
		console.log(input)
		try {
			const searchResults = await ajax({
				url: `${baseUrlV5}search/games`,
				headers: { 'Client-ID': clientId },
				queryParams: { query: input, type: 'suggest' },
			})
			console.log(searchResults)
			return map(
				({ name, _id, box }) => ({
					label: name,
					id: _id,
					value: _id,
					image: prop('small', box),
					// image: stringFormat(
					// 	prop('template', box),
					// 	{ width: 32, height: 32 },
					// ),
				}),
				prop('games', searchResults),
			)
		} catch (e) {
			return []
		}
	},
}

export default (state, { moduleKey, fieldDescPath }) => {
	const promiseType = path(
		[
			moduleIdFromKey(moduleKey), ...fieldDescPath,
			'optionsPromiseType',
		],
		moduleDescriptions,
	)
	return prop(promiseType, promiseTypeMap)
}
