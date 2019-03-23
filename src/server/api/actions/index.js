import {
	GET_PROJECT, CREATE_PROJECT, PLEDGE_PROJECT, GET_PLEDGED_PROJECTS,
	AUDIT_PROJECT, GET_ACTIVE_PROJECTS, GET_PENDING_PROJECTS, SAVE_PARTIAL_DARE_FORM,
	CLEAR_PARTIAL_FORM_KEYS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import getProject from 'root/src/server/api/actions/getProject'
import createProject from 'root/src/server/api/actions/createProject'
import pledgeProject from 'root/src/server/api/actions/pledgeProject'
import getPledgedProjects from 'root/src/server/api/actions/getPledgedProjects'
import auditProject from 'root/src/server/api/actions/auditProject'
import getActiveProjects from 'root/src/server/api/actions/getActiveProjects'
import getPendingProjects from 'root/src/server/api/actions/getPendingProjects'
import savePartialDareForm from 'root/src/server/api/actions/savePartialDareForm'
import clearPartialFormKeys from 'root/src/server/api/actions/clearPartialFormKeys'

export default {
	[CREATE_PROJECT]: createProject,
	[GET_PROJECT]: getProject,

	[PLEDGE_PROJECT]: pledgeProject,
	[GET_PLEDGED_PROJECTS]: getPledgedProjects,

	[AUDIT_PROJECT]: auditProject,

	[GET_ACTIVE_PROJECTS]: getActiveProjects,
	[GET_PENDING_PROJECTS]: getPendingProjects,
	[SAVE_PARTIAL_DARE_FORM]: savePartialDareForm,
	[CLEAR_PARTIAL_FORM_KEYS]: clearPartialFormKeys,
}
