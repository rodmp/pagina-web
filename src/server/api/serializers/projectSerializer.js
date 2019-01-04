import { reduce, pick, prepend, startsWith, split, prop } from 'ramda'

import { skProp, pkProp } from 'sls-aws/src/server/api/lenses'

import { GET_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const {
	overAssignees, setMyPledge, viewPledgeAmount, overGames,
} = responseLenses

export default projectArr => reduce(
	(result, projectPart) => {
		const sk = skProp(projectPart)
		if (startsWith('pledge', sk)) {
			return setMyPledge(viewPledgeAmount(projectPart), result)
		}
		if (startsWith('assignee', sk)) {
			const [, platform, platformId] = split('|', sk)
			const assigneeObj = pick(
				['image', 'description', 'displayName', 'username'],
				projectPart,
			)
			return overAssignees(
				prepend({ platform, platformId, ...assigneeObj }),
				result,
			)
		}
		if (startsWith('game', sk)) {
			const game = pick(
				['boxArtTemplateUrl', 'name'],
				projectPart,
			)
			return overGames(prepend(game), result)
		}
		if (startsWith('project', sk)) {
			const projectObj = pick(
				['title', 'image', 'description', 'pledgeAmount'],
				projectPart,
			)
			return {
				...result,
				...projectObj,
				id: pkProp(projectPart),
				status: prop(1, split('|', skProp(projectPart))),
			}
		}
		return result
	},
	{},
	projectArr,
)
