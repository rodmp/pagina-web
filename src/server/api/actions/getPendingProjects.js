import getProjectsByStatus from 'root/src/server/api/actionUtil/getProjectsByStatus'
import { projectPendingKey } from 'root/src/server/api/lenses'


export default async payload => getProjectsByStatus(projectPendingKey, payload)
