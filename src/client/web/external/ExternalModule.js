import React, { memo } from 'react'

// import ViewProject from 'root/src/client/web/record/ViewProject'
import externalModuleConnector from 'root/src/client/logic/api/connectors/externalModuleConnector'

import withModuleContext from 'root/src/client/util/withModuleContext'

const styles = {}
// import recordModuleConnector from 'root/src/client/logic/api/connectors/recordModuleConnector'

// eventually make this a switch statement for record types
export const ExternalModuleUnconnected = memo(() => (
	// <ViewProject />
	<div>Dupa</div>
))

export default withModuleContext(
	externalModuleConnector(ExternalModuleUnconnected, styles),
)
// export default withModuleContext(recordModuleConnector(RecordModule))
