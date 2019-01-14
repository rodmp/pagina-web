import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/header/lenses'

const { viewBannerSubText } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerSubText(
	moduleId, moduleDescriptions,
)
