import { __, compose, map, addIndex } from 'ramda'

import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewSubmits } = formModuleLenses

export default (state, props) => compose(
	addIndex(map)(({ label }, submitIndex) => [
		label, submitIndex
	]),
	viewSubmits(__, moduleDescriptions),
	moduleIdProp
)(props)
