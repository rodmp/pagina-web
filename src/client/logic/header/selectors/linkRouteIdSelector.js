import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewRouteId } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewRouteId(
	moduleId, moduleDescriptions,
)
