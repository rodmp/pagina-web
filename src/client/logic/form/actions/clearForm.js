import { CLEAR_FORM } from 'root/src/client/logic/form/actionIds'

export default moduleKey => ({
	type: CLEAR_FORM,
	payload: { moduleKey },
})
