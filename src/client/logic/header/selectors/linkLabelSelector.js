import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewLabel } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewLabel(
	moduleId, moduleDescriptions,
)
