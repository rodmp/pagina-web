import { prop } from 'ramda'

import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import { projectApprovedKey } from 'root/src/server/api/lenses'
import { timeMeasurement } from 'root/src/shared/constants/measurement'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'

export default async ({ userId, payload }) => {
	const projectId = prop('projectId', payload)
	const [project, /* assignee, games, */ myPledge] = await dynamoQueryProject(
		userId, projectId,
	)

	const respons = {
		userId,
		...projectSerializer([
			...project,
			// ...assignee,
			// ...games,
			...myPledge,
		]),
	}

	const nowDate = new Date()
	const dareDate = new Date(respons.created)
	const nowHours = nowDate.getHours()
	const diff = Math.ceil(Math.abs(nowDate.getTime() - dareDate.getTime()))
	/ (timeMeasurement.second * timeMeasurement.minute * timeMeasurement.houre * timeMeasurement.day)

	if (!(diff > 30 && nowHours > 17 && respons.status === projectApprovedKey)) {
		return respons
	}
	return {}
}
