import { prop } from 'ramda'

import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'

import dynamoQueryProject from 'sls-aws/src/server/api/actionUtil/dynamoQueryProject'

export default async ({ userId, payload }) => {
	const projectId = prop('projectId', payload)
	const [project, /* assignee, games, */ myPledge] = await dynamoQueryProject(
		userId, projectId,
	)
	return projectSerializer([
		...project,
		// ...assignee,
		// ...games,
		...myPledge,
	])
}
