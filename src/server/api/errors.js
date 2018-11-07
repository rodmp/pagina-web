
export const generalError = errors => ({
	statusCode: 500,
	generalErrors: errors,
})

export const payloadSchemaError = errors => ({
	statusCode: 400,
	schemaErrors: errors,
})

export const responseSchemaError = errors => ({
	statusCode: 500,
	schemaErrors: errors,
})

export const customError = (statusCode, errorObj) => ({
	statusCode,
	...errorObj,
})
