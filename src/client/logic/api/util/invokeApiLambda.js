// import { config } from 'aws-sdk'

import invokeLambda from 'root/src/shared/util/invokeLambda'
import jwtTokenSelector from 'root/src/client/logic/auth/selectors/jwtTokenSelector'
import { apiFunctionArn } from 'root/cfOutput'

export default (endpointId, payload, state) => {
	// May need to refresh here
	// config.credentials.refresh((error) => {
	// 	if (error) {
	// 		console.error(error)
	// 	} else {
	// 		console.log('Successfully logged!')
	// 	}
	// })
	const jwtToken = jwtTokenSelector(state)
	const lambdaPayload = {
		endpointId,
		payload,
		...(jwtToken ? { authentication: jwtToken } : {}),
	}

	return invokeLambda(apiFunctionArn, lambdaPayload)
}
