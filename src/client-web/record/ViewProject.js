import { map, addIndex } from 'ramda'
import React, { memo } from 'react'

import Assignee from 'sls-aws/src/client-web/viewProject/Assignee'
import viewProjectConnector from 'sls-aws/src/client-logic/project/connectors/viewProjectConnector'

export const ViewProjectModule = memo(({
	projectDescription, projectTitle, pledgeAmount, myPledge, status,
	assignees,
}) => (
	<div className="layout-column">
		<div>Project Status: {status}</div>
		<div>{ projectTitle }</div>
		<div>{ projectDescription }</div>
		<div>Pledge Amount: {pledgeAmount}</div>
		<div>My Pledge Amount: {myPledge}</div>
		{addIndex(map)((assignee, i) => (
			<Assignee key={i} {...assignee} />
		), assignees)}
	</div>
))

export default viewProjectConnector(ViewProjectModule)
