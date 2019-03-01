import { compose } from 'ramda'

import { API_EXTERNAL_REQUEST_SUCCESS } from 'root/src/client/logic/api/actionIds'
import createExternalStoreKey from 'root/src/client/logic/api/util/createExternalStoreKey'
import { apiStoreLenses, idProp } from 'root/src/client/logic/api/lenses'

const { setExternalsChild } = apiStoreLenses

export const apiExternalRequestSuccess = (
	state,
	{ recordType, external },
) => {
	console.log(external)
	const externalId = idProp(external)
	const externalStoreId = createExternalStoreKey(recordType, externalId)
	return compose(
		setExternalsChild(externalStoreId, external),
	)(state)
}

export default {
	[API_EXTERNAL_REQUEST_SUCCESS]: apiExternalRequestSuccess,
}
