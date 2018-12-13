import React, { memo } from 'react'

import MuiListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

// import listItemConnector from 'sls-aws/src/client-logic/list/connectors/listItemConnector'

export const ListItem = memo(({ primaryText, secondaryText }) => (
	<MuiListItem>
		<Avatar>
			<ImageIcon />
		</Avatar>
		{/* <ListItemText primary={primaryText} secondary={secondaryText} /> */}
	</MuiListItem>
))

// export default listItemConnector(ListItem)
export default ListItem
