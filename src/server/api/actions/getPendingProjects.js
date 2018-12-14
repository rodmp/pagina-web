import getProjectsByStatus from 'sls-aws/src/server/api/actionUtil/getProjectsByStatus'
import { projectPendingKey } from 'sls-aws/src/server/api/lenses'


export default async () => getProjectsByStatus(projectPendingKey)
