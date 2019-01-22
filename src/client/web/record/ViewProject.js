import { map, addIndex } from 'ramda'
import React, { memo } from 'react'
import classNames from 'classnames'

import {
	gtXsMediaQuery, xsMediaQuery,
} from 'sls-aws/src/client/web/commonStyles'

import Assignee from 'sls-aws/src/client/web/record/Assignee'

import MaxWidthContainer from 'sls-aws/src/client/web/base/MaxWidthContainer'
import Title from 'sls-aws/src/client/web/typography/Title'
import SubHeader from 'sls-aws/src/client/web/typography/SubHeader'
import Button from 'sls-aws/src/client/web/base/Button'

import RecordClickActionButton from 'sls-aws/src/client/web/base/RecordClickActionButton'
import { APPROVE_PROJECT } from 'sls-aws/src/shared/descriptions/recordClickActions/recordClickActionIds'

import viewProjectConnector from 'sls-aws/src/client/logic/project/connectors/viewProjectConnector'
import withModuleContext from 'sls-aws/src/client/util/withModuleContext'

import goToPledgeProjectHandler from 'sls-aws/src/client/logic/project/handlers/goToPledgeProjectHandler'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'


const styles = {
	image: {
		width: '100%',
	},
	sidebar: {
		[xsMediaQuery]: {
			marginTop: 10,
		},
		[gtXsMediaQuery]: {
			paddingLeft: 40,
		},
	},
	sidebarItem: {
		marginBottom: 20,
	},
	description: {
		wordWrap: 'break-word',
	},
}

export const ViewProjectModule = memo(({
	projectId, projectDescription, projectTitle, pledgeAmount, myPledge, status,
	assignees, gameImage, canApproveProject, pushRoute, canPledgeProject,
	classes,
}) => (
	<div className="flex layout-row layout-align-center-start">
		<MaxWidthContainer>
			<div className="flex layout-row layout-wrap">
				<div className="flex-100 layout-row layout-align-center">
					<Title>{projectTitle}</Title>
				</div>
				<div className="flex-100 flex-gt-xs-60 flex-order-1">
					<img alt="Game" src={gameImage} className={classes.image} />
				</div>
				<div
					className={classNames(
						'flex-100 flex-gt-xs-40',
						'flex-order-3 flex-order-gt-xs-2',
						'layout-column',
					)}
				>
					<div
						className={classNames(classes.sidebar, 'layout-column')}
					>
						<div className={classes.sidebarItem}>
							<SubHeader>Total Pledged</SubHeader>
							{pledgeAmount}
						</div>
						<div
							className={classNames(
								classes.sidebarItem,
								'layout-row layout-wrap',
							)}
						>
							{addIndex(map)((assignee, i) => (
								<Assignee key={i} {...assignee} />
							), assignees)}
						</div>
						{orNull(
							canApproveProject,
							<div className={classes.sidebarItem}>
								<RecordClickActionButton
									recordClickActionId={APPROVE_PROJECT}
									recordId={projectId}
								/>
							</div>,
						)}
						{orNull(
							canPledgeProject,
							<div className={classes.sidebarItem}>
								<Button
									onClick={goToPledgeProjectHandler(
										projectId, pushRoute,
									)}
								>
									Pledge
								</Button>
							</div>,
						)}
					</div>

				</div>
				<div className="flex-100 flex-order-2 flex-order-gt-xs-3">
					<SubHeader>Description</SubHeader>
					<div className={classes.description}>
						{projectDescription}
					</div>
				</div>
			</div>
		</MaxWidthContainer>
	</div>
))

export default withModuleContext(
	viewProjectConnector(ViewProjectModule, styles),
)
