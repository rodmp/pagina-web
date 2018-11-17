import getProjectsByStatus from 'sls-aws/src/server/api/actionUtil/getProjectsByStatus'
import { projectApprovedKey } from 'sls-aws/src/server/api/lenses'

import listResults from 'sls-aws/src/server/api/actionUtil/listResults'
import pledgeSerializer from 'sls-aws/src/server/api/serializers/pledgeSerializer'

export default async () => {
	const projects = await getProjectsByStatus(projectApprovedKey)
	return listResults({
		projects,
		serializer: pledgeSerializer,
	})
}
