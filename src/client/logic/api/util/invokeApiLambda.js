import invokeLambda from 'sls-aws/src/shared/util/invokeLambda'
import jwtTokenSelector from 'sls-aws/src/client/logic/auth/selectors/jwtTokenSelector'
import { apiFunctionArn } from 'sls-aws/cfOutput'

export default (endpointId, payload, state) => {
	const jwtToken = jwtTokenSelector(state)
	const lambdaPayload = {
		endpointId,
		payload,
		...(jwtToken ? { authentication: jwtToken } : {}),
	}
	return invokeLambda(apiFunctionArn, lambdaPayload)
}
