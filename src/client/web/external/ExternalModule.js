import React, { memo } from 'react'

import externalModuleConnector from 'root/src/client/logic/api/connectors/externalModuleConnector'

import withModuleContext from 'root/src/client/util/withModuleContext'

import GetUserTwitch from 'root/src/client/web/external/GetUserTwitch'

export const ExternalModuleUnconnected = memo(({
	externalData: { displayName }, moduleId, pageContent,
}) => {
	switch (moduleId) {
		case 'TWITCH_OAUTH_MODULE_ID':
			return <GetUserTwitch displayName={displayName} pageContent={pageContent} />
		default:
			return <div>No module found</div>
	}
})

export default withModuleContext(
	externalModuleConnector(ExternalModuleUnconnected),
)
