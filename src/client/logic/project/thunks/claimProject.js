import { head } from 'ramda'
import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import currentRouteParamsRecordId from 'root/src/client/logic/route/selectors/currentRouteParamsRecordId'
import { ACCEPT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { viewUserDataChild, viewUserData } = apiStoreLenses

export default formData => async (dispatch, getState) => {
	const state = getState()
	const tokenId = head(Object.keys(viewUserData(state)))
	const projectId = currentRouteParamsRecordId(state)
	const userData = viewUserDataChild(tokenId, state)
	// TUTAJ SK
	const assigneeId = userData.sk
	const apiPayload = {
		...formData,
		projectId,
		assigneeId,
	}
	return dispatch(apiRequest(ACCEPT_PROJECT, apiPayload))
}
