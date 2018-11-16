import {
	GET_PROJECT, CREATE_PROJECT, PLEDGE_PROJECT, GET_PLEDGED_PROJECTS,
	AUDIT_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'

import getProject from 'sls-aws/src/server/api/actions/getProject'
import createProject from 'sls-aws/src/server/api/actions/createProject'
import pledgeProject from 'sls-aws/src/server/api/actions/pledgeProject'
import getPledgedProjects from 'sls-aws/src/server/api/actions/getPledgedProjects'
import auditProject from 'sls-aws/src/server/api/actions/auditProject'

export default {
	[CREATE_PROJECT]: createProject,
	[GET_PROJECT]: getProject,

	[PLEDGE_PROJECT]: pledgeProject,
	[GET_PLEDGED_PROJECTS]: getPledgedProjects,

	[AUDIT_PROJECT]: auditProject,
}
