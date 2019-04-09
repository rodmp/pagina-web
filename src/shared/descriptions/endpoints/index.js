import { map } from 'ramda'

import lensesFromSchema from 'root/src/shared/util/lensesFromSchema'

import createProject from 'root/src/shared/descriptions/endpoints/createProject'
import savePartialDareForm from 'root/src/shared/descriptions/endpoints/savePartialDareForm'
import getProject from 'root/src/shared/descriptions/endpoints/getProject'
import pledgeProject from 'root/src/shared/descriptions/endpoints/pledgeProject'
import getPledgedProjects from 'root/src/shared/descriptions/endpoints/getPledgedProjects'
import auditProject from 'root/src/shared/descriptions/endpoints/auditProject'
import updateProject from 'root/src/shared/descriptions/endpoints/updateProject'

import getPaymentMethods from 'root/src/shared/descriptions/endpoints/getPaymentMethods'
import getPaymentMethod from 'root/src/shared/descriptions/endpoints/getPaymentMethod'
import addPaymentMethod from 'root/src/shared/descriptions/endpoints/addPaymentMethod'
import deletePaymentMethod from 'root/src/shared/descriptions/endpoints/deletePaymentMethod'
import setDefaultPaymentMethod from 'root/src/shared/descriptions/endpoints/setDefaultPaymentMethod'
import authTwitch from 'root/src/shared/descriptions/endpoints/authTwitch'

import getActiveProjects from 'root/src/shared/descriptions/endpoints/getActiveProjects'
import getPendingProjects from 'root/src/shared/descriptions/endpoints/getPendingProjects'

import addToFavorites from 'root/src/shared/descriptions/endpoints/addToFavorites'
import removeToFavorites from 'root/src/shared/descriptions/endpoints/removeToFavorites'

const allEndpoints = {
	...createProject,
	...getProject,
	...pledgeProject,
	...getPledgedProjects,
	...auditProject,
	...getActiveProjects,
	...getPendingProjects,
	...authTwitch,
	...savePartialDareForm,
	...getPaymentMethods,
	...getPaymentMethod,
	...addPaymentMethod,
	...deletePaymentMethod,
	...setDefaultPaymentMethod,
	...updateProject,
	...addToFavorites,
	...removeToFavorites,
}

export default map(
	endpoint => ({
		payloadLenses: lensesFromSchema(endpoint.payloadSchema),
		responseLenses: lensesFromSchema(endpoint.responseSchema),
		...endpoint,
	}),
	allEndpoints,
)
