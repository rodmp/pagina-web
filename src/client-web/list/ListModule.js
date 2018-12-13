import { map } from 'ramda'
import React, { memo } from 'react'

import ListItem from 'sls-aws/src/client-web/list/ListItem'

import withModuleContext from 'sls-aws/src/util/withModuleContext'

import List from '@material-ui/core/List'

import listModuleConnector from 'sls-aws/src/client-logic/api/connectors/listModuleConnector'

export const ListModule = memo(({ list }) => (
	<List>
		{map(recordId => (
			<ListItem key={recordId} recordId={recordId} />
		), list)}
	</List>
))

export default withModuleContext(listModuleConnector(ListModule))
