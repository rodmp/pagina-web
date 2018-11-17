import { map } from 'ramda'

import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

import createProject from 'sls-aws/src/descriptions/endpoints/createProject'
import getProject from 'sls-aws/src/descriptions/endpoints/getProject'
import pledgeProject from 'sls-aws/src/descriptions/endpoints/pledgeProject'
import getPledgedProjects from 'sls-aws/src/descriptions/endpoints/getPledgedProjects'
import auditProject from 'sls-aws/src/descriptions/endpoints/auditProject'

import getActiveProjects from 'sls-aws/src/descriptions/endpoints/getActiveProjects'
import getPendingProjects from 'sls-aws/src/descriptions/endpoints/getPendingProjects'


const allEndpoints = {
	...createProject,
	...getProject,
	...pledgeProject,
	...getPledgedProjects,
	...auditProject,
	...getActiveProjects,
	...getPendingProjects,
}

export default map(
	endpoint => ({
		payloadLenses: lensesFromSchema(endpoint.payloadSchema),
		responseLenses: lensesFromSchema(endpoint.responseSchema),
		...endpoint,
	}),
	allEndpoints,
)
