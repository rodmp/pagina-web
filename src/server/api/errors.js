
export const generalError = errors => ({
	statusCode: 500,
	generalErrors: errors,
})

export const payloadSchemaError = errors => ({
	statusCode: 400,
	schemaErrors: errors,
})

export const notFoundError = endpointId => ({
	statusCode: 404,
	generalErrors: `Endpoint ${endpointId} not found`,
})

export const responseSchemaError = errors => ({
	statusCode: 500,
	schemaErrors: errors,
})

export const authorizationError = errorMessage => ({
	statusCode: 403,
	generalErrors: errorMessage,
})

export const customError = (statusCode, errorObj) => ({
	statusCode,
	...errorObj,
})
