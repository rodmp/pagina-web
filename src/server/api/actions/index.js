import {
	GET_PROJECT, CREATE_PROJECT, PLEDGE_PROJECT, GET_PLEDGED_PROJECTS,
	GET_PAYMENT_METHODS, ADD_PAYMENT_METHOD, DELETE_PAYMENT_METHOD, SET_DEFAULT_PAYMENT_METHOD,
	AUDIT_PROJECT, GET_ACTIVE_PROJECTS, GET_PENDING_PROJECTS, UPDATE_PROJECT,
	SAVE_PARTIAL_DARE_FORM, CLEAR_PARTIAL_FORM_KEYS,
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
import setDafaultPaymentMethod from 'root/src/server/api/actions/setDefaultPaymentMethod'
import savePartialDareForm from 'root/src/server/api/actions/savePartialDareForm'
import clearPartialFormKeys from 'root/src/server/api/actions/clearPartialFormKeys'
import updateProject from 'root/src/server/api/actions/updateProject'
import getMyProjects from 'root/src/server/api/actions/getMyProjects'

export default {
	[CREATE_PROJECT]: createProject,
	[GET_PROJECT]: getProject,
	[UPDATE_PROJECT]: updateProject,

	[PLEDGE_PROJECT]: pledgeProject,
	[GET_PLEDGED_PROJECTS]: getPledgedProjects,
	// [GET_MY_PROJECTS]: getMyProjects,

	[AUDIT_PROJECT]: auditProject,

	[GET_ACTIVE_PROJECTS]: getActiveProjects,
	[GET_PENDING_PROJECTS]: getPendingProjects,
	[SAVE_PARTIAL_DARE_FORM]: savePartialDareForm,
	[CLEAR_PARTIAL_FORM_KEYS]: clearPartialFormKeys,

	[GET_PAYMENT_METHODS]: getPaymentMethods,
	[ADD_PAYMENT_METHOD]: addPaymentMethod,
	[DELETE_PAYMENT_METHOD]: deletePaymentMethod,
	[SET_DEFAULT_PAYMENT_METHOD]: setDafaultPaymentMethod,
}
