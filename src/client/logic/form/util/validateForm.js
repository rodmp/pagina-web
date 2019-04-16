import { isEmpty, not, equals } from 'ramda'

import validateSchema from 'root/src/shared/util/validateSchema'

import getFormSchema from 'root/src/client/logic/form/selectors/formSchema'
import getFormData from 'root/src/client/logic/form/selectors/formData'
import moduleIdFromKey from 'root/src/client/logic/route/util/moduleIdFromKey'

import ajvErrors from 'root/src/shared/util/ajvErrors'

export default (moduleKey, state, submitKey) => new Promise((resolve, reject) => {
	const moduleId = moduleIdFromKey(moduleKey)
	const formSchema = getFormSchema(null /* no state needed */, { moduleId, submitKey })
	const formData = getFormData(state, { moduleKey })
	Object.keys(formData).forEach((key) => {
		if (isEmpty(formData[key]) && not(equals(formData[key], 0))) {
			delete formData[key]
		}
	})

	return validateSchema(moduleId, formSchema, formData, submitKey).then(
		({ valid, errors }) => {
			if (valid) {
				resolve(formData)
			} else {
				reject(ajvErrors(formSchema, errors))
			}
		},
	)
})
