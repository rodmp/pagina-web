import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	footerModuleDescriptionLenses,
} from 'root/src/client/logic/footer/lenses'

const { viewBannerFooterImage } = footerModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerFooterImage(
	moduleId, moduleDescriptions,
)
