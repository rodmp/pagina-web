import { reduce, pick, prepend, startsWith } from 'ramda'

import { skProp, pkProp } from 'sls-aws/src/server/api/lenses'

import { GET_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)

export default projectArr => reduce(
	(result, projectPart) => {
		const { overAssignees } = responseLenses
		const sk = skProp(projectPart)
		if (startsWith('assignee', sk)) {
			const assigneeObj = pick(
				[
					'platform', 'image', 'platformId', 'description',
					'displayName',
				],
				projectPart,
			)
			return overAssignees(
				prepend({ id: sk, ...assigneeObj }),
				result,
			)
		}
		if (startsWith('project', sk)) {
			const projectObj = pick(
				['title', 'image', 'description', 'pledgeAmount'],
				projectPart,
			)
			return { ...result, ...projectObj, id: pkProp(projectPart) }
		}
		return result
	},
	{},
	projectArr,
)
