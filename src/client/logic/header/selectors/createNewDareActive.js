import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	bannerHeaderModuleDescriptionLenses,
} from 'root/src/client/logic/header/lenses'

const { viewCreateNewDareActive } = bannerHeaderModuleDescriptionLenses

export default (state, { moduleId }) => viewCreateNewDareActive(
	moduleId, moduleDescriptions,
)
