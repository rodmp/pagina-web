import { compose, add, defaultTo } from 'ramda'

import { STEP_FORM_NEXT_PAGE } from 'root/src/client/logic/form/actionIds'

import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { overStepFormPage } = formStoreLenses

export default {
	[STEP_FORM_NEXT_PAGE]: (state, { moduleKey }) => overStepFormPage(
		moduleKey,
		compose(
			add(1),
			defaultTo(0),
		),
		state,
	),
}
