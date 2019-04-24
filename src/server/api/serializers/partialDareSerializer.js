import { SAVE_PARTIAL_DARE_FORM } from 'root/src/shared/descriptions/endpoints/endpointIds'

import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'

const payloadLenses = getPayloadLenses(SAVE_PARTIAL_DARE_FORM)
const {
	viewAssignees, viewGames, viewTitle, viewDescription,
} = payloadLenses

export default payload => ({
	assignees: viewAssignees(payload),
	games: viewGames(payload),
	title: viewTitle(payload),
	description: viewDescription(payload),
})
