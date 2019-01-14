import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'


import {
	bannerHeaderModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/header/lenses'

const { viewBannerImageText } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerImageText(
	moduleId, moduleDescriptions,
)
