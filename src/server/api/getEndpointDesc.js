import { all, prop, path } from 'ramda'

import clientEndpoints from 'sls-aws/src/shared/descriptions/endpoints'

export const testEndpointExists = endpointId => all([
	prop(endpointId, clientEndpoints),
])

export const getPayloadLenses = endpointId => path(
	[endpointId, 'payloadLenses'],
	clientEndpoints,
)

export const getResponseLenses = endpointId => path(
	[endpointId, 'responseLenses'],
	clientEndpoints,
)

export const getPayloadSchema = endpointId => path(
	[endpointId, 'payloadSchema'],
	clientEndpoints,
)

export const getResultSchema = endpointId => path(
	[endpointId, 'resultSchema'],
	clientEndpoints,
)

export const getAuthentication = endpointId => path(
	[endpointId, 'authentication'],
	clientEndpoints,
)

export const getAction = endpointId => prop(endpointId, serverEndpoints)
