import { map } from 'ramda'

import lensesFromSchema from 'root/src/shared/util/lensesFromSchema'

import createProject from 'root/src/shared/descriptions/endpoints/createProject'
import getProject from 'root/src/shared/descriptions/endpoints/getProject'
import pledgeProject from 'root/src/shared/descriptions/endpoints/pledgeProject'
import getPledgedProjects from 'root/src/shared/descriptions/endpoints/getPledgedProjects'
import auditProject from 'root/src/shared/descriptions/endpoints/auditProject'
import updateProject from 'root/src/shared/descriptions/endpoints/updateProject'

import authTwitch from 'root/src/shared/descriptions/endpoints/authTwitch'
import getAuthTokens from 'root/src/shared/descriptions/endpoints/getAuthTokens'

import getActiveProjects from 'root/src/shared/descriptions/endpoints/getActiveProjects'
import getPendingProjects from 'root/src/shared/descriptions/endpoints/getPendingProjects'


const allEndpoints = {
	...createProject,
	...getProject,
	...pledgeProject,
	...getPledgedProjects,
	...auditProject,
	...getActiveProjects,
	...getPendingProjects,
	...authTwitch,
	...getAuthTokens,
	...updateProject,
}

export default map(
	endpoint => ({
		payloadLenses: lensesFromSchema(endpoint.payloadSchema),
		responseLenses: lensesFromSchema(endpoint.responseSchema),
		...endpoint,
	}),
	allEndpoints,
)
