import React, { memo } from 'react'

import ViewProject from 'sls-aws/src/client/web/record/ViewProject'

import withModuleContext from 'sls-aws/src/client/util/withModuleContext'


// import recordModuleConnector from 'sls-aws/src/client/logic/api/connectors/recordModuleConnector'

// eventually make this a switch statement for record types
export const ListModule = memo(() => (
	<ViewProject />
))

export default withModuleContext(ListModule)
// export default withModuleContext(recordModuleConnector(ListModule))
