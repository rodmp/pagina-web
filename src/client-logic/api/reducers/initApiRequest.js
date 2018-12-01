import { concat, length } from 'ramda'

import { INIT_API_REQUEST } from 'sls-aws/src/client-logic/api/actionIds'
import {
	apiStoreLenses,
} from 'sls-aws/src/client-logic/api/lenses'

// const { setFormInputsChild, pathOrFormInputsChild } = apiStoreLenses

export default {
	[INIT_API_REQUEST]: (state, { moduleKey, fieldId }) => {
		console.log(apiStoreLenses)
		return state
	},
}
