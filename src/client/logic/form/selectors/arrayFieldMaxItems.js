import { path } from 'ramda'

import moduleDescriptions from 'root/src/shared/descriptions/modules'
import moduleIdFromKey from 'root/src/client/logic/route/util/moduleIdFromKey'

export default (state, { moduleKey, fieldDescPath }) => path(
	[moduleIdFromKey(moduleKey), 'fields', ...fieldDescPath, 'maxItems'],
	moduleDescriptions,
)
