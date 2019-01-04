import React, { memo } from 'react'

import withModuleContext from 'sls-aws/src/shared/util/withModuleContext'
import projectListItemConnector from 'sls-aws/src/client-logic/project/connectors/projectListItemConnector'
import goToViewProjectHandler from 'sls-aws/src/client-logic/project/handlers/goToViewProjectHandler'

import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export const ListItemUnconnected = memo(({
	recordId, pushRoute, projectTitle, pledgeAmount,
}) => (
	<MuiListItem
		onClick={goToViewProjectHandler(recordId, pushRoute)}
	>
		<Avatar>
			<ImageIcon />
		</Avatar>
		<ListItemText primary={projectTitle} secondary={pledgeAmount} />
	</MuiListItem>
))

export default withModuleContext(projectListItemConnector(ListItemUnconnected))
