import { NEXT_STEP } from 'root/src/client/logic/form/actionIds'

export default formData => ({
	type: NEXT_STEP,
	payload: { formData },
})
