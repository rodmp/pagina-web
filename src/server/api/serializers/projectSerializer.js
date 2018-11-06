import { reduce, pick, prepend, startsWith } from 'ramda'

import { skProp, pkProp } from 'sls-aws/src/server/api/lenses'

export default (projectArr, responseLenses) => reduce(
	(result, projectPart) => {
		const { overAssignees } = responseLenses
		const sk = skProp(projectPart)
		if (startsWith('assignee', sk)) {
			const assigneeObj = pick(
				['platform', 'image', 'platformId'], projectPart,
			)
			return overAssignees(prepend(assigneeObj), result)
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
