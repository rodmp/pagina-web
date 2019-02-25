import { __, compose, map, addIndex } from 'ramda'

import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewFields } = formModuleLenses

export default (state, props) => compose(
	addIndex(map)(
		({
			fieldId,
			inputType,
			subFieldText,
			labelFieldText,
			inputMaxLength,
		}, fieldIndex) => [
			[fieldId],
			[fieldIndex],
			inputType,
			fieldId,
			subFieldText,
			labelFieldText,
			inputMaxLength,
		],
	),
	viewFields(__, moduleDescriptions),
	moduleIdProp,
)(props)
