import { path } from 'ramda'

import moduleDescriptions from 'root/src/shared/descriptions/modules'

export default (state, { moduleId }) => path(
	[moduleId, 'staticPageType'], moduleDescriptions,
)
