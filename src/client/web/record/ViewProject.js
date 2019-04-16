import { map, addIndex, isNil } from 'ramda'
import React, { memo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { orNull, ternary } from 'root/src/shared/util/ramdaPlus'

import {
	gtXsMediaQuery, gtSmMediaQuery, gtMdMediaQuery, smMediaQuery,
} from 'root/src/client/web/commonStyles'

import Assignee from 'root/src/client/web/record/Assignee'

import MaxWidthContainer from 'root/src/client/web/base/MaxWidthContainer'
import Title from 'root/src/client/web/typography/Title'
import SubHeader from 'root/src/client/web/typography/SubHeader'
import Button from 'root/src/client/web/base/Button'
import { TwitchButton } from 'root/src/client/web/base/CustomButton'

import { twitchOauthUrl } from 'root/src/shared/constants/twitch'
import TextField from '@material-ui/core/TextField'

import RecordClickActionButton from 'root/src/client/web/base/RecordClickActionButton'
import { storageSet } from 'root/src/shared/util/storage'
import isOneOfAssigneesSelector from 'root/src/client/logic/project/selectors/isOneOfAssigneesSelector'
import { APPROVE_PROJECT, REJECT_PROJECT, REJECT_ACTIVE_PROJECT } from 'root/src/shared/descriptions/recordClickActions/recordClickActionIds'

import viewProjectConnector from 'root/src/client/logic/project/connectors/viewProjectConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'
import goToSignInHandler from 'root/src/client/logic/project/handlers/goToSignInHandler'
import goToPledgeProjectHandler from 'root/src/client/logic/project/handlers/goToPledgeProjectHandler'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const styles = {
	title: {
		marginTop: 28,
		marginBottom: 20,
		'@media (min-width: 1284px)': {
			marginBottom: 25,
		},
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
		'& > button': {
			borderRadius: 20,
		},
		'& span': {
			textTransform: 'none',
		},
		'& > div': {
			fontSize: 16,
			fontWeight: 'bold',
		},
	},
	text: {
		marginTop: 15,
		height: 17,
		fontFamily: 'Roboto',
		fontSize: '14px !important',
		lineHeight: 1.21,
		color: '#000000',
		fontWeight: '500 !important',
	},
	leftIcon: {
		marginRight: 10,
	},
	descriptionContainer: {
		marginTop: 19,
		marginBottom: 18.5,
		'@media (min-width: 768px)': {
			marginBottom: 10.5,
		},
		'@media (min-width: 1284px)': {
			marginBottom: 32,
		},
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
		marginTop: 8,
	},
	progressOuter: {
		width: '100%',
		height: 12,
		borderRadius: 8,
		border: '1px solid rgba(128, 0, 128, 0.2)',
		backgroundColor: '#ffffff',
		boxSixing: 'border-box',
		marginBottom: 18.5,
	},
	progressInner: {
		width: '25%',
		height: 12,
		borderRadius: 8,
		backgroundColor: '#800080',
	},
	titleText: {
		'& div': {
			maxWidth: 400,
			marginBottom: 0,
			display: '-webkit-box',
			WebkitBoxOrient: 'vertical',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			textTransform: 'none',
		},
	},
	flexDeraction: {
		display: 'flex',
		[gtXsMediaQuery]: {
			flexDirection: 'row',
		},
		'@media (min-width: 768px) and (max-width: 1284px)': {
			flexDirection: 'row',
		},
		'@media (min-width: 1284px)': {
			flexDirection: 'column',
		},
	},
	streamerTitle: {
		marginTop: 9,
		marginBottom: 0,
		'& div': {
			fontWeight: 'bold',
			fontStyle: 'normal',
			fontStretch: 'normal',
			fontSize: 16,
		},
	},
	'mb-10': {
		marginBottom: 10,
	},
	sidebarItemText: {
		fontSize: 14,
	},
	pledgeButton: {
		marginBottom: 65,
	},
}


export const ViewProjectModule = memo(({
	addToFavorites, removeToFavorites, favoritesAmount, myFavorites,
	projectId, projectDescription, projectTitle, pledgeAmount, assignees,
	gameImage, canApproveProject, canRejectProject, pushRoute, canPledgeProject,
	classes, isAuthenticated, canEditProjectDetails, updateProject,
	myPledge, status, canRejectActiveProject, pledgers, created,
	userData = {},
}) => {
	const [title, setTitle] = useState(projectTitle)
	const [description, setDescription] = useState(projectDescription)

	useEffect(() => {
		setTitle(projectTitle)
		setDescription(projectDescription)
	}, [projectTitle, projectDescription])

	return (
		<div className="flex layout-row layout-align-center-start">
			<MaxWidthContainer>
				<div className="flex layout-row layout-wrap">
					<div className={classNames(
						'flex-100', 'layout-row',
						'layout-align-center', classes.title,
					)}
					>
						{ternary(canEditProjectDetails,
							<TextField
								label="Title"
								type="text"
								value={title || ''}
								onChange={e => setTitle(e.target.value)}
								variant="outlined"
							/>,
							<div className={classes.titleText}>
								<Title>{title}</Title>
							</div>)}

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
								<div className={classNames('flex-40', 'flex-gt-sm-100', classes.sidebarItem)}>
									<SubHeader>Total Pledged</SubHeader>
									<div className={classNames(classes.text)}>{pledgeAmount}</div>
								</div>
								<div className={classNames('flex-30', 'flex-gt-sm-100', classes.sidebarItem)}>
									<SubHeader>Pledgers</SubHeader>
									<div className={classNames(classes.text)}>{pledgers}</div>
								</div>
								<div className={classNames('flex-30', 'flex-gt-sm-50', classes.sidebarItem)}>
									<SubHeader>Days to go</SubHeader>
									<div className={classNames(classes.text)}>{created}</div>
								</div>
							</div>
							<div className={classNames(classes.sidebarItem, classes.streamerTitle)}>
								<SubHeader>Streamer challenged: </SubHeader>
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
							)
							}
							<div className={classes.sidebarItem}>
								<Button
									onClick={ternary(
										isAuthenticated,
										goToPledgeProjectHandler(projectId, pushRoute),
										goToSignInHandler(pushRoute),
									)}
								>
									Pledge
								</Button>
							</div>
							{
								orNull(
									canRejectActiveProject,
									<div className={classes.sidebarItem}>
										<RecordClickActionButton
											recordClickActionId={REJECT_ACTIVE_PROJECT}
											recordId={projectId}
										/>
									</div>,
								)
							}
							{ternary(isOneOfAssigneesSelector(assignees, userData),
								<TwitchButton
									title="Accept or reject Dare"
								/>,
								<TwitchButton
									title="Accept or reject Dare"
									subtitle="Connect with Twitch"
									withIcon
									onClick={() => {
										storageSet('redirectAssignee', assignees[0].username)
										storageSet('redirectUri', window.location.pathname)
									}}
									href={twitchOauthUrl}
								/>)}
							{
								orNull(
									canRejectProject,
									<div className={classes.sidebarItem}>
										<RecordClickActionButton
											recordClickActionId={REJECT_PROJECT}
											recordId={projectId}
										/>
									</div>,
								)
							}
							{
								isNil(myFavorites) || myFavorites == 0 ?
									<div className={classes.sidebarItem}>
										<Button
											buttonType="noBackgroundButton"
											onClick={
												ternary(
													isAuthenticated,
													addToFavorites,
													goToSignInHandler(pushRoute),
												)}
										>
											<FavoriteBorderIcon className={classes.leftIcon} />
											Add to Favorites({favoritesAmount === 'undefined' ? 0 : favoritesAmount})
										</Button>
									</div>
									:
									<div className={classes.sidebarItem}>
										<Button
											buttonType="noBackgroundButton"
											onClick={
												ternary(
													isAuthenticated,
													removeToFavorites,
													goToSignInHandler(pushRoute),
												)}
										>
											Added to your Favorites({favoritesAmount === 'undefined' ? 0 : favoritesAmount})
										</Button>
									</div>
							}
						</div>
					</div>
					<div className={classNames(
						'flex-100', 'flex-order-2', 'flex-order-gt-sm-3',
						classes.descriptionContainer,
					)}
					>
						<div className={classNames(classes.descriptionTitle)}>Description</div>
						<div className={classNames('flex-100', 'layout-row')}>
							<div className={classNames('flex-90')}>
								{ternary(canEditProjectDetails,
									<TextField
										type="textarea"
										value={description || ''}
										onChange={e => setDescription(e.target.value)}
										variant="outlined"
										fullWidth
									/>,
									<div className={classes.description}>
										{projectDescription}
									</div>)}
							</div>
							{orNull(canEditProjectDetails,
								<Button
									onClick={() => updateProject({ title, description, projectId })}
									isSmallButton
								>
									Save
								</Button>)}
						</div>
					</div>
				</div>
			</MaxWidthContainer>
		</div>
	)
})

export default withModuleContext(
	viewProjectConnector(ViewProjectModule, styles),
)
