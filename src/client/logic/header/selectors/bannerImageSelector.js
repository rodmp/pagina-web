import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/header/lenses'

const { viewBannerImage } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerImage(
	moduleId, moduleDescriptions,
)
