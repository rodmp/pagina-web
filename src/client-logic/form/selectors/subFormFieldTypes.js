import { __, compose, map, addIndex } from 'ramda'

import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewSubFormFields } = formModuleLenses

export default (state, props) => compose(
	addIndex(map)(({ fieldId, inputType }, subFieldIndex) => [
		fieldId,
		[props.fieldDescPath[0], 'subFormFields', subFieldIndex],
		inputType,
	]),
	viewSubFormFields(__, props.fieldDescPath[0], moduleDescriptions),
	moduleIdProp,
)(props)
