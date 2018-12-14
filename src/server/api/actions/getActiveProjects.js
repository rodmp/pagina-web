import getProjectsByStatus from 'sls-aws/src/server/api/actionUtil/getProjectsByStatus'
import { projectApprovedKey } from 'sls-aws/src/server/api/lenses'


export default async () => getProjectsByStatus(projectApprovedKey)
