import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewTextWithBg } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewTextWithBg(
	moduleId, moduleDescriptions,
)
