import { map, addIndex } from 'ramda'
import React, { memo } from 'react'
import classNames from 'classnames'

import {
	smMediaQuery, gtSmMediaQuery,
} from 'root/src/client/web/commonStyles'

import Assignee from 'root/src/client/web/record/Assignee'

import MaxWidthContainer from 'root/src/client/web/base/MaxWidthContainer'
import Title from 'root/src/client/web/typography/Title'
import SubHeader from 'root/src/client/web/typography/SubHeader'
import Button from 'root/src/client/web/base/Button'

import RecordClickActionButton from 'root/src/client/web/base/RecordClickActionButton'
import { APPROVE_PROJECT } from 'root/src/shared/descriptions/recordClickActions/recordClickActionIds'

import viewProjectConnector from 'root/src/client/logic/project/connectors/viewProjectConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'

import goToPledgeProjectHandler from 'root/src/client/logic/project/handlers/goToPledgeProjectHandler'

import { orNull } from 'root/src/shared/util/ramdaPlus'

const styles = {
	title: {
		marginTop: 28,
		marginBottom: 25,
	},
	image: {
		width: '100%',
	},
	sidebar: {
		[smMediaQuery]: {
			marginTop: 10,
		},
		[gtSmMediaQuery]: {
			paddingLeft: 40,
		},
	},
	sidebarItem: {
		marginTop: 10,
		marginBottom: 20,
	},
	descriptionContainer: {
		marginTop: 20,
		marginBottom: 32,
	},
	descriptionTitle: {
		width: 96,
		height: 24,
		fontFamily: 'Roboto',
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 1.2,
		letterSpacing: 0.4,
		textAlign: 'center',
		color: '#000000',
	},
	description: {
		width: '100%',
		minHeight: 85,
		fontFamily: 'Roboto',
		fontSize: 20,
		lineHeight: 1.2,
		color: '#000000',
		marginTop: 20,
	},
	progressOuter: {
		width: '100%',
		height: 12,
		borderRadius: 8,
		border: '1px solid rgba(128, 0, 128, 0.2)',
		backgroundColor: '#ffffff',
		boxSixing: 'border-box',
		marginBottom: 20,
	},
	progressInner: {
		width: '25%',
		height: 12,
		borderRadius: 8,
		backgroundColor: '#800080',
	},
	text: {
		marginTop: 15,
		height: 17,
		fontFamily: 'Roboto',
		fontSize: 14,
		lineHeight: 1.21,
		color: '#000000',
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
				<div className={classNames(
					'flex-100', 'layout-row',
					'layout-align-center', classes.title,
				)}
				>
					<Title>{projectTitle}</Title>
				</div>
				<div className="flex-100 flex-gt-sm-60 flex-order-1">
					<img alt="Game" src={gameImage} className={classes.image} />
				</div>
				<div
					className={classNames(
						'flex-100 flex-gt-sm-40',
						'flex-order-3 flex-order-gt-sm-2',
						'layout-column',
					)}
				>
					<div
						className={classNames(classes.sidebar, 'layout-column')}
					>
						<div className={classNames(classes.progressOuter)}>
							<div className={classNames(classes.progressInner)} />
						</div>
						<div className={classNames('flex', 'layout-row', 'layout-wrap')}>
							<div className={classNames('flex-50', 'flex-gt-sm-100', classes.sidebarItem)}>
								<SubHeader>Total Pledged</SubHeader>
								<div className={classNames(classes.text)}>{pledgeAmount}</div>
							</div>
							<div className={classNames('flex-50', 'flex-gt-sm-100', classes.sidebarItem)}>
								<SubHeader>Pledgers</SubHeader>
								<div className={classNames(classes.text)}>{assignees.length}</div>
							</div>
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
				<div className={classNames(
					'flex-100', 'flex-order-2', 'flex-order-gt-sm-3',
					classes.descriptionContainer,
				)}
				>
					<div className={classNames(classes.descriptionTitle)}>Description</div>
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
