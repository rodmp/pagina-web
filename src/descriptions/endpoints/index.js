import { map } from 'ramda'

import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

import createProject from 'sls-aws/src/descriptions/endpoints/createProject'
import getProject from 'sls-aws/src/descriptions/endpoints/getProject'


const allEndpoints = {
	...createProject,
	...getProject,
}

export default map(
	endpoint => ({
		payloadLenses: lensesFromSchema(endpoint.payloadSchema),
		responseLenses: lensesFromSchema(endpoint.responseSchema),
		...endpoint,
	}),
	allEndpoints,
)
