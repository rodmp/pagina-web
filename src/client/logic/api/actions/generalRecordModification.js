import { GENERAL_RECORD_MODIFICATION } from 'sls-aws/src/client/logic/api/actionIds'

export default (subs, updates) => ({
	type: GENERAL_RECORD_MODIFICATION,
	payload: { subs, updates },
})
