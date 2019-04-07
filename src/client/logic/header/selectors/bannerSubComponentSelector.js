import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/header/lenses'

const { viewBannerSubComponent } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerSubComponent(
	moduleId, moduleDescriptions,
)
