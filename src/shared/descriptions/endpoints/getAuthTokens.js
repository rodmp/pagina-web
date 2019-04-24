import {
	GET_OAUTH_TOKENS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { userData } from 'root/src/shared/descriptions/endpoints/recordTypes'
import { userDataEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'

export default {
	[GET_OAUTH_TOKENS]: {
		endpointType: userDataEndpointType,
		recordType: userData,
	},
}
