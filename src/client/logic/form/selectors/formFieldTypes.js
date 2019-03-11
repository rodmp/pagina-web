import { has, compose, map, addIndex } from 'ramda'

import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import { formModuleLenses, stepFormModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

export default (state, props) => compose(
	addIndex(map)(
		({
			fieldId,
			inputType,
			subFieldText,
			labelFieldText,
			extraButton,
			inputMaxLength,
		}, fieldIndex) => [
			[fieldId],
			[...(has('formIndex', props) ? ['forms', props.formIndex] : []), 'fields', fieldIndex],
			inputType,
			fieldId,
			subFieldText,
			labelFieldText,
			extraButton,
			inputMaxLength,
		],
	),
	(moduleId) => {
		if (has('formIndex', props)) {
			return stepFormModuleLenses.viewFields(
				moduleId, props.formIndex, moduleDescriptions,
			)
		}
		return formModuleLenses.viewFields(
			moduleId, moduleDescriptions,
		)
	},
	moduleIdProp,
)(props)
