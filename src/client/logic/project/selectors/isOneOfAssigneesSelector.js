export default (assignees, userData) => assignees
	.filter(assignee => assignee.username === userData.displayName).length > 0
