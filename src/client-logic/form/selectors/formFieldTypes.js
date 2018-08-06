import { __, addIndex, compose, map } from 'ramda'

import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewFields } = formModuleLenses

export default (state, props) => compose(
	addIndex(map)(({ inputType }, index) => [index, inputType]),
	viewFields(__, moduleDescriptions),
	moduleIdProp
)(props)
