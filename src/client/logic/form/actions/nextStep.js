import { NEXT_STEP } from 'sls-aws/src/client/logic/form/actionIds'

export default formData => ({
	type: NEXT_STEP,
	payload: { formData },
})
