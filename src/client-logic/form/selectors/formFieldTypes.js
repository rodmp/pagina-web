import { __, compose, map, addIndex } from 'ramda'

import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewFields } = formModuleLenses

export default (state, props) => compose(
	addIndex(map)(({ fieldId, inputType }, fieldIndex) => [
		fieldId, fieldIndex, inputType
	]),
	viewFields(__, moduleDescriptions),
	moduleIdProp
)(props)
