import getProjectsByStatus from 'root/src/server/api/actionUtil/getProjectsByStatus'
import { projectApprovedKey } from 'root/src/server/api/lenses'


export default async payload => getProjectsByStatus(projectApprovedKey, payload)
