import { prop } from 'ramda'

import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'
import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'

import dynamoQueryProject from 'sls-aws/src/server/api/actionUtil/dynamoQueryProject'

export default async ({ userId, payload }) => {
	const projectId = prop('projectId', payload)
	const [project, assignee, myPledge] = await dynamoQueryProject(
		userId, projectId,
	)
	return projectSerializer([
		...dynamoItemsProp(project),
		...dynamoItemsProp(assignee),
		...dynamoItemsProp(myPledge),
	])
}
