import { path, prop, map } from 'ramda'
// import stringFormat from 'string-format'

import ajax from 'sls-aws/src/util/ajax'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'

import { clientId, baseUrlV5 } from 'sls-aws/src/constants/twitch'

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
		try {
			const searchResults = await ajax({
				url: `${baseUrlV5}search/games`,
				headers: { 'Client-ID': clientId },
				queryParams: { query: input, type: 'suggest' },
			})
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
			moduleIdFromKey(moduleKey), 'fields', ...fieldDescPath,
			'optionsPromiseType',
		],
		moduleDescriptions,
	)
	return prop(promiseType, promiseTypeMap)
}
