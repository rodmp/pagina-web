import moduleDescriptions from 'root/src/shared/descriptions/modules'

import {
	footerModuleDescriptionLenses,
} from 'root/src/client/logic/footer/lenses'

const { viewIsSuccessPage } = footerModuleDescriptionLenses

export default (state, { moduleId }) => viewIsSuccessPage(
	moduleId, moduleDescriptions,
)
