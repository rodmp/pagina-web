import { path } from 'ramda'

import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

export default (state, { moduleId }) => path(
	[moduleId, 'pageContent'], moduleDescriptions,
)
