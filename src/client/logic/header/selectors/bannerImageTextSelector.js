import moduleDescriptions from 'root/src/shared/descriptions/modules'


import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewBannerImageText } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerImageText(
	moduleId, moduleDescriptions,
)
