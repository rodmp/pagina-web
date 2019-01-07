import validateSchema from 'sls-aws/src/shared/util/validateSchema'

import getFormSchema from 'sls-aws/src/client/logic/form/selectors/formSchema'
import getFormData from 'sls-aws/src/client/logic/form/selectors/formData'
import moduleIdFromKey from 'sls-aws/src/client/logic/route/util/moduleIdFromKey'

import ajvErrors from 'sls-aws/src/shared/util/ajvErrors'

export default (moduleKey, state) => new Promise((resolve, reject) => {
	const moduleId = moduleIdFromKey(moduleKey)
	const formSchema = getFormSchema(null /* no state needed */, { moduleId })
	const formData = getFormData(state, { moduleKey })
	return validateSchema(moduleId, formSchema, formData).then(
		({ valid, errors }) => {
			if (valid) {
				resolve(formData)
			} else {
				reject(ajvErrors(formSchema, errors))
			}
		},
	)
})
