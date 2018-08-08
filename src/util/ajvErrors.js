import { reduce, assoc, path, replace, prop, compose } from 'ramda'

import { capitalize } from 'sls-aws/src/util/stringCase'

const dataPathKey = compose(
	replace('.', ''),
	prop('dataPath'),
)
const missingPropertyKey = path(['params', 'missingProperty'])
const schemaPathKey = compose(
	replace(/#\/properties\/(.*?)\/.*/, '$1'),
	prop('schemaPath'),
)
const errorLimit = path(['params', 'limit'])

const getConstant = (schema, key) => compose(
	replace('1/', ''),
	path(['properties', key, 'constant', '$data'])
)(schema)

export default (schema, errors) => reduce((result, error) => {
	switch (error.keyword) {
		case 'constant': {
			const errorKey = dataPathKey(error)
			return assoc(
				errorKey,
				`${capitalize(errorKey)} must equal ${capitalize(getConstant(errorKey))}`,
				result
			)
		}
		case 'required': {
			const errorKey = missingPropertyKey(error)
			return assoc(
				errorKey, `${capitalize(errorKey)} is required`, result
			)
		}
		case 'minLength': { 
			const errorKey = schemaPathKey(error)
			return assoc(
				errorKey,
				`${capitalize(errorKey)} must be at least ${errorLimit(error)} characters`,
				result
			)
		}
		case 'format': {
			const errorKey = schemaPathKey(error)
			return assoc(errorKey, `Invalid ${error.params.format}`, result)
		}
		default: {
			const errorKey = dataPathKey(error)
			return assoc(errorKey, JSON.stringify(error), result)
		}
	}
}, {}, errors)
