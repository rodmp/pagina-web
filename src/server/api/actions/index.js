import {
	GET_PROJECT, CREATE_PROJECT, PLEDGE_PROJECT, GET_PLEDGED_PROJECTS,
	GET_OAUTH_TOKENS, ADD_OAUTH_TOKEN, CLEAR_PARTIAL_FORM_KEYS,
	AUDIT_PROJECT, GET_ACTIVE_PROJECTS, GET_PENDING_PROJECTS,
	GET_PAYMENT_METHODS, ADD_PAYMENT_METHOD, DELETE_PAYMENT_METHOD, UPDATE_PROJECT,
	SAVE_PARTIAL_DARE_FORM, ACCEPT_PROJECT, REJECT_PROJECT,
	SET_DEFAULT_PAYMENT_METHOD, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES,
	GET_FAVORITES_LIST, GET_MY_PROJECTS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import getProject from 'root/src/server/api/actions/getProject'
import createProject from 'root/src/server/api/actions/createProject'
import pledgeProject from 'root/src/server/api/actions/pledgeProject'
import getPledgedProjects from 'root/src/server/api/actions/getPledgedProjects'
import auditProject from 'root/src/server/api/actions/auditProject'
import getActiveProjects from 'root/src/server/api/actions/getActiveProjects'
import getPendingProjects from 'root/src/server/api/actions/getPendingProjects'
import getOAuthTokens from 'root/src/server/api/actions/getOAuthTokens'
import addOAuthToken from 'root/src/server/api/actions/addOAuthToken'
import savePartialDareForm from 'root/src/server/api/actions/savePartialDareForm'
import clearPartialFormKeys from 'root/src/server/api/actions/clearPartialFormKeys'
import getFavoritesList from 'root/src/server/api/actions/getFavoritesList'
import getPaymentMethods from 'root/src/server/api/actions/getPaymentMethods'
import addPaymentMethod from 'root/src/server/api/actions/addPaymentMethod'
import deletePaymentMethod from 'root/src/server/api/actions/deletePaymentMethod'
import setDafaultPaymentMethod from 'root/src/server/api/actions/setDefaultPaymentMethod'
import updateProject from 'root/src/server/api/actions/updateProject'
import acceptProject from 'root/src/server/api/actions/acceptProject'
import rejectProject from 'root/src/server/api/actions/rejectProject'
import addToFavorites from 'root/src/server/api/actions/addToFavorites'
import removeToFavorites from 'root/src/server/api/actions/removeToFavorites'
import getMyProjects from 'root/src/server/api/actions/getMyProjects'

export default {
	[CREATE_PROJECT]: createProject,
	[GET_PROJECT]: getProject,
	[UPDATE_PROJECT]: updateProject,

	[PLEDGE_PROJECT]: pledgeProject,
	[GET_PLEDGED_PROJECTS]: getPledgedProjects,
	[GET_MY_PROJECTS]: getMyProjects,

	[ADD_TO_FAVORITES]: addToFavorites,
	[REMOVE_TO_FAVORITES]: removeToFavorites,

	[AUDIT_PROJECT]: auditProject,

	[GET_ACTIVE_PROJECTS]: getActiveProjects,
	[GET_PENDING_PROJECTS]: getPendingProjects,

	[GET_OAUTH_TOKENS]: getOAuthTokens,
	[ADD_OAUTH_TOKEN]: addOAuthToken,
	[GET_FAVORITES_LIST]: getFavoritesList,
	[SAVE_PARTIAL_DARE_FORM]: savePartialDareForm,
	[CLEAR_PARTIAL_FORM_KEYS]: clearPartialFormKeys,

	[GET_PAYMENT_METHODS]: getPaymentMethods,
	[ADD_PAYMENT_METHOD]: addPaymentMethod,
	[DELETE_PAYMENT_METHOD]: deletePaymentMethod,

	[ACCEPT_PROJECT]: acceptProject,
	[REJECT_PROJECT]: rejectProject,
	[SET_DEFAULT_PAYMENT_METHOD]: setDafaultPaymentMethod,
}
