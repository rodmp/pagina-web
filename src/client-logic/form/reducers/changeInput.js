import { CHANGE_INPUT } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses, viewPayloadInputId, viewPayloadInputValue,
	viewPayloadFormHash,
} from 'sls-aws/src/client-logic/form/lenses'

const { setFormInputsChild, setDirty } = formStoreLenses

export default {
	[CHANGE_INPUT]: (state, actionPayload) => {
		const formHash = viewPayloadFormHash(actionPayload)
		const inputId = viewPayloadInputId(actionPayload)
		const inputValue = viewPayloadInputValue(actionPayload)
		return setFormInputsChild(
			formHash,
			inputId,
			inputValue,
			setDirty(formHash, inputId, true, state)
		)
	}
}
