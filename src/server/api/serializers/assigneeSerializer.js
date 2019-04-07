import { map, prop, reduce, addIndex, propEq, find } from 'ramda'
import { idProp } from 'root/src/client/logic/api/lenses'

import { payloadSchemaError } from 'root/src/server/api/errors'

import { getUserData, getGameData } from 'root/src/server/api/twitchApi'

const createDataToFetchObjs = (
	userDataFetchFn, gameDataFetchFn, [assignees, games],
) => [
	{
		payloadData: assignees,
		fetchFn: userDataFetchFn,
		payloadKey: 'assignees',
		staticData: { platform: 'twitch' },
		dataMap: [
			['image', 'profile_image_url'],
			['platformId', 'id'],
			['description', 'description'],
			['displayName', 'display_name'],
			['username', 'login'],
		],
	},
	{
		payloadData: games,
		fetchFn: gameDataFetchFn,
		payloadKey: 'games',
		staticData: {},
		dataMap: [
			['id', 'id'],
			['name', 'name'],
			['boxArtTemplateUrl', 'box_art_url'],
		],
	},
]

export const getDataHof = (userDataFetchFn, gameDataFetchFn) => (idArrays) => {
	const dataToFetch = createDataToFetchObjs(
		userDataFetchFn, gameDataFetchFn, idArrays,
	)
	return Promise.all(map(async ({
		payloadData, fetchFn, payloadKey, staticData, dataMap,
	}) => {
		if (payloadData.length) {
			const providerRes = await fetchFn(map(idProp, payloadData))
			const providerData = prop('data', providerRes)
			return addIndex(map)(({ id }, index) => {
				const specificProviderData = find(
					propEq('id', id.toString()),
					providerData,
				)
				if (specificProviderData) {
					return reduce((result, [key, providerProp]) => {
						const providerValue = prop(
							providerProp, specificProviderData,
						)
						if (providerValue) {
							return { ...result, [key]: providerValue }
						}
						return result
					}, staticData, dataMap)
				}
				throw payloadSchemaError({
					[payloadKey]: {
						[index]: 'Invalid twitch user',
					},
				})
			}, payloadData)
		}
		return []
	}, dataToFetch))
}

export const getRemoteApiData = getDataHof(
	getUserData, getGameData,
)

export default async ({ project, payloadLenses }) => {
	const { viewAssignees, setAssignees, viewGames, setGames } = payloadLenses
	const assigneeArray = viewAssignees(project)
	const gamesArray = viewGames(project)

	// These must be in the same order as the dataToFetch array
	const results = await getRemoteApiData([assigneeArray, gamesArray])

	return addIndex(reduce)((result, setFn, index) => (
		setFn(prop(index, results), result)
	), project, [setAssignees, setGames])
}
