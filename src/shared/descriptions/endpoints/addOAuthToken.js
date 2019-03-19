import {
	ADD_OAUTH_TOKEN,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { userData } from 'root/src/shared/descriptions/endpoints/recordTypes'
import { userDataEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'

export default {
	[ADD_OAUTH_TOKEN]: {
		endpointType: userDataEndpointType,
		recordType: userData,
	},
}
