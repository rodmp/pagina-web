import React, { memo } from 'react'

import userDataModuleConnector from 'root/src/client/logic/api/connectors/userDataModuleConnector'

import withModuleContext from 'root/src/client/util/withModuleContext'

import GetUserTwitch from 'root/src/client/web/userData/GetUserTwitch'

export const UserDataModuleUnconnected = memo(({
	userData, moduleId, pageContent,
}) => {
	switch (moduleId) {
		case 'TWITCH_OAUTH_MODULE_ID':
			return <GetUserTwitch userData={userData} pageContent={pageContent} />
		default:
			return <div>No module found</div>
	}
})

export default withModuleContext(
	userDataModuleConnector(UserDataModuleUnconnected),
)
