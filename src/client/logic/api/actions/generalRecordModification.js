import { GENERAL_RECORD_MODIFICATION } from 'root/src/client/logic/api/actionIds'

export default (subs, updates) => ({
	type: GENERAL_RECORD_MODIFICATION,
	payload: { subs, updates },
})
