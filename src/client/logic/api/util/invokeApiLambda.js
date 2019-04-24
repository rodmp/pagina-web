import invokeLambda from 'root/src/shared/util/invokeLambda'
import jwtTokenSelector from 'root/src/client/logic/auth/selectors/jwtTokenSelector'
import { apiFunctionArn } from 'root/cfOutput'

export default (endpointId, payload, state) => {
	const jwtToken = jwtTokenSelector(state)
	const lambdaPayload = {
		endpointId,
		payload,
		...(jwtToken ? { authentication: jwtToken } : {}),
	}

	return invokeLambda(apiFunctionArn, lambdaPayload)
}
