import {
	lensPath, lensProp, compose, insert, __, unapply, identity, flatten,
} from 'ramda'

// {
// 	form: {
// 		formKey: {
// 			routeHash: {
// 				formData: {
// 					formSubmitted: Boolean
// 				},
// 				formInputs: {
// 					fieldKey: value,
// 				},
// 				fieldData: {
// 					dirty: Boolean,
// 					valid: Boolean,
// 					error: Boolean,
// 				}
// 			},
// 		},
// 	},
// }

export const namespaceKey = 'form'

export const formDataKey = 'formData'
export const formSubmittedKey = 'formSubmitted'

export const formInputKey = 'formInput'

export const fieldDataKey = 'fieldData'
export const dirtyKey = 'dirty'
export const validKey = 'valid'
export const errorKey = 'error'

export const formSubmittedLens = compose(
	lensPath,
	flatten,
	insert(1, __, [namespaceKey, formDataKey, formSubmittedKey]),
	unapply(identity)
)

export const formInputLens = compose(
	lensPath,
	flatten,
	insert(1, __, [namespaceKey, formInputKey]),
	unapply(identity)
)

export const fieldDirtyLens = compose(
	lensPath,
	flatten,
	insert(1, __, [namespaceKey, fieldDataKey, dirtyKey]),
	unapply(identity)
)

export const fieldValidLens = compose(
	lensPath,
	flatten,
	insert(1, __, [namespaceKey, fieldDataKey, validKey]),
	unapply(identity)
)

export const fieldErrorLens = compose(
	lensPath,
	flatten,
	insert(1, __, [namespaceKey, fieldDataKey, errorKey]),
	unapply(identity)
)
