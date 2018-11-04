import {
	GET_PROJECT, CREATE_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'

import getProject from 'sls-aws/src/server/api/actions/getProject'
import createProject from 'sls-aws/src/server/api/actions/createProject'

export default {
	[GET_PROJECT]: getProject,
	[CREATE_PROJECT]: createProject,
}
