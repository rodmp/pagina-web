import { compose } from 'ramda'

import { API_EXTERNAL_REQUEST_SUCCESS } from 'root/src/client/logic/api/actionIds'
import createExternalStoreKey from 'root/src/client/logic/api/util/createExternalStoreKey'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setUserDataChild } = apiStoreLenses

export const apiExternalRequestSuccess = (
	state,
	{ recordType, lambda, isNotListed },
) => {
	const externalStoreId = createExternalStoreKey(recordType, lambda.body)
	return compose(
		setUserDataChild(externalStoreId, { ...lambda.body, isNotListed }),
	)(state)
}

export default {
	[API_EXTERNAL_REQUEST_SUCCESS]: apiExternalRequestSuccess,
}
