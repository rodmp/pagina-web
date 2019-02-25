import { prop } from 'ramda'

import projectSerializer from 'root/src/server/api/serializers/projectSerializer'

import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'

export default async ({ userId, payload }) => {
	const projectId = prop('projectId', payload)
	const [project, assignee, game, myPledge] = await dynamoQueryProject(
		userId, projectId,
	)
	return projectSerializer([
		...project,
		...assignee,
		...game,
		...myPledge,
	])
}
