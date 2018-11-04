import { map } from 'ramda'

import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

import createProject from 'sls-aws/src/descriptions/endpoints/createProject'


const allEndpoints = {
	...createProject,
}

export default map(
	endpoint => ({
		payloadLenses: lensesFromSchema(endpoint.payloadSchema),
		responseLenses: lensesFromSchema(endpoint.responseSchema),
		...endpoint,
	}),
	allEndpoints,
)
