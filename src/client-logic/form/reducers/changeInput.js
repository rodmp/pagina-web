import { CHANGE_INPUT } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { setFormInputsChild, setDirty } = formStoreLenses

export default {
	[CHANGE_INPUT]: (state, { moduleKey, fieldId, value }) => (
		setFormInputsChild(
			moduleKey,
			fieldId,
			value,
			setDirty(moduleKey, fieldId, true, state),
		)
	),
}
