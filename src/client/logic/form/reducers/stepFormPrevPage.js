import { compose, subtract, defaultTo } from 'ramda'

import { STEP_FORM_PREV_PAGE } from 'root/src/client/logic/form/actionIds'

import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { overStepFormPage } = formStoreLenses

export default {
	[STEP_FORM_PREV_PAGE]: (state, { moduleKey }) => overStepFormPage(
		moduleKey,
		compose(
			subtract(1),
			defaultTo(0),
		),
		state,
	),
}
