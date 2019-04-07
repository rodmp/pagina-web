import React, { memo } from 'react'

import ViewProject from 'root/src/client/web/record/ViewProject'

import withModuleContext from 'root/src/client/util/withModuleContext'


// import recordModuleConnector from 'root/src/client/logic/api/connectors/recordModuleConnector'

// eventually make this a switch statement for record types
export const RecordModuleUnconnected = memo(() => (
	<ViewProject />
))

export default withModuleContext(RecordModuleUnconnected)
// export default withModuleContext(recordModuleConnector(RecordModule))
