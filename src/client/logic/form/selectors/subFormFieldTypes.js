import { __, compose, map, addIndex, join, path } from 'ramda'

import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewFields } = formModuleLenses

export default (state, props) => compose(
	addIndex(map)(({ fieldId, inputType }, subFieldIndex) => {
		const fieldPath = [...props.fieldPath, props.subFormIndex, fieldId]
		return [
			fieldPath,
			[...props.fieldDescPath, 'subFormFields', subFieldIndex],
			inputType,
			join('_', fieldPath),
		]
	}),
	compose(
		path([...props.fieldDescPath, 'subFormFields']),
		viewFields(__, moduleDescriptions),
	),
	moduleIdProp,
)(props)
