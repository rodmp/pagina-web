import { pick } from 'ramda'

export default project => pick([
	'title', 'description', 'pledgeAmount', 'assignees', 'games',
], project)
