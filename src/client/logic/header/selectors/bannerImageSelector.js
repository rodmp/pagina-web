import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewBannerImage } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerImage(
	moduleId, moduleDescriptions,
)
