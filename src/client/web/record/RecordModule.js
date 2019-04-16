import React, { memo } from 'react'

import ViewProject from 'root/src/client/web/record/ViewProject'
import ClaimProject from 'root/src/client/web/record/ClaimProject'

import withModuleContext from 'root/src/client/util/withModuleContext'

import recordModuleConnector from 'root/src/client/logic/api/connectors/recordModuleConnector'
 
// TODO: when will have project in Marketplace again check it works as expected for viewProject
// previously, when <ViewProject /> was the default - worked
export const RecordModuleUnconnected = memo(({ recordPageType }) => {
	switch (recordPageType) {
		case 'viewProject':
			return <ViewProject />
		case 'claimProject':
			return <ClaimProject />
		default:
			return <div>Unsuported record page type: {recordPageType}</div>
	}
})

export default withModuleContext(recordModuleConnector(RecordModuleUnconnected))
