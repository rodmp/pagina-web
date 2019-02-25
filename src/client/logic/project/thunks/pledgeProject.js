import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import currentRouteParamsRecordId from 'root/src/client/logic/route/selectors/currentRouteParamsRecordId'
import { PLEDGE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default formData => async (dispatch, getState) => {
	const state = getState()
	const projectId = currentRouteParamsRecordId(state)
	const { stripeCardId } = formData
	const stripeRes = await stripeCardId.createSource({
		type: 'card', usage: 'reusable', currency: 'usd',
	})
	const apiPayload = {
		...formData,
		projectId,
		stripeCardId: stripeRes.source.id,
	}
	return dispatch(apiRequest(PLEDGE_PROJECT, apiPayload))
}
