// import { config } from 'aws-sdk'

import invokeExternal from 'root/src/shared/util/invokeExternal'

export default (endpointId, payload) => {
	const requestPayload = {
		endpointId,
		payload,
  }
	return invokeExternal(requestPayload)
}
