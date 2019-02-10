import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/header/lenses'

const { viewTextWithBg } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewTextWithBg(
	moduleId, moduleDescriptions,
)
