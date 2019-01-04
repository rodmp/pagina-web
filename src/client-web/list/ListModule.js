import { map } from 'ramda'
import React, { memo } from 'react'

import ProjectListItem from 'sls-aws/src/client-web/list/ProjectListItem'

import withModuleContext from 'sls-aws/src/shared/util/withModuleContext'

import List from '@material-ui/core/List'

import listModuleConnector from 'sls-aws/src/client-logic/api/connectors/listModuleConnector'

export const ListModule = memo(({ list }) => (
	<List>
		{map(recordId => (
			<ProjectListItem key={recordId} recordId={recordId} />
		), list)}
	</List>
))

export default withModuleContext(listModuleConnector(ListModule))
