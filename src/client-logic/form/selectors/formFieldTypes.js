import { __, compose, map } from 'ramda'

import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewFields } = formModuleLenses

export default (state, props) => compose(
	map(({ fieldId, inputType }) => [fieldId, inputType]),
	viewFields(__, moduleDescriptions),
	moduleIdProp
)(props)
