import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewBannerSubText } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerSubText(
	moduleId, moduleDescriptions,
)
