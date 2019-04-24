import moduleDescriptions from 'root/src/shared/descriptions/modules'


import {
  bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewBannerImageSubText } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewBannerImageSubText(
  moduleId, moduleDescriptions,
)
