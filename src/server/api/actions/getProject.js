import { prop } from 'ramda'

import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import { projectApprovedKey } from 'root/src/server/api/lenses'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import moment from 'moment'

export default async ({ userId, payload }) => {
	const projectId = prop('projectId', payload)
	const [project, myPledge] = await dynamoQueryProject(
		userId, projectId,
	)

	const respons = {
		userId,
		...projectSerializer([
			...project,
			...myPledge,
		]),
	}

	const diff = moment().diff(respons.created, 'days')
	const nowHours = moment(respons.created).day()
	if (!(diff > 30 && Number(nowHours) > 17 && respons.status === projectApprovedKey)) {
		return respons
	}
	return {}
}
