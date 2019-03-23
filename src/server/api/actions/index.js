import {
	GET_PROJECT, CREATE_PROJECT, PLEDGE_PROJECT, GET_PLEDGED_PROJECTS,
	AUDIT_PROJECT, GET_ACTIVE_PROJECTS, GET_PENDING_PROJECTS, GET_PAYMENT_METHODS,
	ADD_PAYMENT_METHOD, DELETE_PAYMENT_METHOD,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import getProject from 'root/src/server/api/actions/getProject'
import createProject from 'root/src/server/api/actions/createProject'
import pledgeProject from 'root/src/server/api/actions/pledgeProject'
import getPledgedProjects from 'root/src/server/api/actions/getPledgedProjects'
import auditProject from 'root/src/server/api/actions/auditProject'
import getActiveProjects from 'root/src/server/api/actions/getActiveProjects'
import getPendingProjects from 'root/src/server/api/actions/getPendingProjects'
import getPaymentMethods from 'root/src/server/api/actions/getPaymentMethods'
import addPaymentMethod from 'root/src/server/api/actions/addPaymentMethod'
import deletePaymentMethod from 'root/src/server/api/actions/deletePaymentMethod'

export default {
	[CREATE_PROJECT]: createProject,
	[GET_PROJECT]: getProject,

	[PLEDGE_PROJECT]: pledgeProject,
	[GET_PLEDGED_PROJECTS]: getPledgedProjects,

	[AUDIT_PROJECT]: auditProject,

	[GET_ACTIVE_PROJECTS]: getActiveProjects,
	[GET_PENDING_PROJECTS]: getPendingProjects,

	[GET_PAYMENT_METHODS]: getPaymentMethods,
	[ADD_PAYMENT_METHOD]: addPaymentMethod,
	[DELETE_PAYMENT_METHOD]: deletePaymentMethod,
}
