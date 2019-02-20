import { NEXT_STEP } from 'sls-aws/src/client/logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client/logic/form/lenses'

const { setFormData } = formStoreLenses

export default {
	[NEXT_STEP]: (state, { formData }) => setFormData(
		'',
		formData,
		state,
	),
}
