import {
	__, compose, map, addIndex, equals,
} from 'ramda'

import moduleKeySelector from 'root/src/client/logic/route/selectors/moduleKey'
import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import {
	formModuleLenses, formStoreLenses,
} from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewSubmits } = formModuleLenses
const { viewFormSubmitting } = formStoreLenses

export default (state, props) => compose(
	addIndex(map)(({ label }, submitIndex) => [
		label,
		submitIndex,
		equals(
			viewFormSubmitting(moduleKeySelector(state, props), state),
			submitIndex,
		),
	]),
	viewSubmits(__, moduleDescriptions),
	moduleIdProp,
)(props)
