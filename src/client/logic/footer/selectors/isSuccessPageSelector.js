import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

import {
	footerModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/footer/lenses'

const { viewIsSuccessPage } = footerModuleDescriptionLenses

export default (state, { moduleId }) => viewIsSuccessPage(
	moduleId, moduleDescriptions,
)
