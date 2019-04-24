import { map, pick, split, prop } from 'ramda'

import { skProp, pkProp } from 'root/src/server/api/lenses'

export default projectArr => map(
	(projectPart) => {
		const projectObj = pick(
			[
				'title', 'image', 'description', 'pledgeAmount',
				'assignees', 'games', 'pledgers', 'created',
			],
			projectPart,
		)
		return {
			...projectObj,
			id: pkProp(projectPart),
			user: prop(1, split('|', skProp(projectPart))),
		}
	},
	projectArr,
)
