import {
	split, last, map, prop, contains, reduce, addIndex, propEq, find,
} from 'ramda'

import { payloadSchemaError } from 'sls-aws/src/server/api/errors'

import { getUserData } from 'sls-aws/src/server/api/twitchApi'

export const getTwitchAssigneeDataHof = getUserDataFn => async (
	assigneeArray,
) => {
	const twitchUsernames = addIndex(reduce)((result, assigneeObj, index) => {
		const streamerUrl = prop('url', assigneeObj)
		if (contains('twitch.tv', streamerUrl)) {
			return [...result, [index, last(split('/', streamerUrl))]]
		}
		return result
	}, [], assigneeArray)
	if (twitchUsernames.length) {
		const twitchRes = await getUserDataFn(map(last, twitchUsernames))
		const twitchData = prop('data', twitchRes)
		return map(([index, twitchUsername]) => {
			const twitchUserData = find(
				propEq('login', twitchUsername.toLowerCase()),
				twitchData,
			)
			if (twitchUserData) {
				return {
					platform: 'twitch',
					image: prop('profile_image_url', twitchUserData),
					platformId: prop('id', twitchUserData),
					description: prop('description', twitchUserData),
					displayName: prop('display_name', twitchUserData),
					username: prop('login', twitchUserData),
				}
			}
			// @TODO make a error creation function
			throw payloadSchemaError({
				assignee: {
					[index]: 'Invalid twitch user',
				},
			})
		}, twitchUsernames)
	}
	return Promise.resolve([])
}

export const getTwitchAssigneeData = getTwitchAssigneeDataHof(getUserData)

export const getYoutubeAssigneeData = () => Promise.resolve()

export default async ({ project, payloadLenses }) => {
	const { viewAssignees, setAssignees } = payloadLenses
	const assigneeArray = viewAssignees(project)
	const results = await getTwitchAssigneeData(assigneeArray)
	return setAssignees(results, project)

	// once you do youtube
	// const results = await Promise.all([
	// 	getTwitchAssigneeData(assigneeArray),
	//  getYoutubeAssigneeData(assigneeArray),
	// ])
	// const assignees = concat(...results)
	// return setAssignees(assignees)
}
