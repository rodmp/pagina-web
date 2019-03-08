import React, { memo } from 'react'

import withModuleContext from 'root/src/client/util/withModuleContext'
import projectListItemConnector from 'root/src/client/logic/project/connectors/projectListItemConnector'
import goToViewProjectHandler from 'root/src/client/logic/project/handlers/goToViewProjectHandler'

import Button from 'root/src/client/web/base/Button'
import ShareMenu from 'root/src/client/web/base/ShareMenu'
import Header from 'root/src/client/web/typography/Header'
import Body from 'root/src/client/web/typography/Body'
import TertiaryBody from 'root/src/client/web/typography/TertiaryBody'
import classNames from 'classnames'

const styles = {
	cardRoot: {
		margin: [[0, 10, 20]],
		color: 'white',
		width: '280px',
		alignSelf: 'center',
		height: '310px',
		borderRadius: '4px',
		overflow: 'hidden',
		boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
	},
	cardBg: {
		backgroundPosition: 'top',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	cardHeader: {
		height: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.74)',
		padding: [[0, 16]],
	},
	headerText: {
		fontSize: '20px',
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	headerTextH3: {
		fontSize: '20px',
		fontFamily: 'Roboto',
		fontWeight: '500',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: '1.2',
		letterSpacing: '0.3px',
	},
	cardFooter: {
		height: 135,
		backgroundColor: 'rgba(0, 0, 0, 0.74)',
		padding: [[11, 16, 8]],
	},
	cardGameTitle: {
		marginBottom: 10,
	},
	description: {
		height: 40,
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	assigneeImg: {
		margin: [[6, 0, 9, 0]],
		width: 100,
		height: 100,
	},
	descriptionText: {
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: '1.25',
		letterSpacing: '0.3px',
		fontFamily: 'Roboto',
	},
	buttonContainer: {
		textAlign: 'center',
		marginTop: 11,
	},
	button: {
		width: '93px',
		height: '36px',
		borderRadius: '20px',
	},
	shareIcon: {
		margin: [[12, -12, 0]],
	},
}

export const ListItemUnconnected = memo(({
	recordId, pushRoute, projectTitle, projectDescription, classes,
	projectGameImage, projectAssigneesImages, projectShareUrl, projectGames,
}) => (
	<section
		className={classNames(
			classes.cardRoot,
		)}
	>
		<div
			className={classNames(
				'flex layout-column',
				classes.cardBg,
			)}
			style={{ backgroundImage: `url(${projectGameImage})` }}
		>
			<div
				className={classNames(
					classes.cardHeader,
					'layout-row layout-align-start-center',
				)}
			>
				<div className={classNames(classes.headerText, 'flex')}>
					<h3 className={classNames(classes.headerTextH3)}>{projectTitle}</h3>
				</div>
				<div className={classes.shareIcon}>
					<ShareMenu url={projectShareUrl} />
				</div>
			</div>
			<div className="layout-row layout-align-center">
				{projectAssigneesImages.map((imgSrc, i) => (
					<img
						key={i}
						className={classes.assigneeImg}
						src={imgSrc}
						alt={`Assignee${i}`}
					/>
				))}
			</div>
			<div
				className={classNames(
					'layout-column layout-align-space-around',
					classes.cardFooter,
				)}
			>
				<div className={classes.cardGameTitle}>
					<TertiaryBody>{projectGames.map(({ name }) => name)}</TertiaryBody>
				</div>
				<div className={classes.description}>
					<Body style={classes.descriptionText}>{projectDescription}</Body>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						onClick={goToViewProjectHandler(recordId, pushRoute)}
						style={classes.button}
					>
							pledge
					</Button>
				</div>
			</div>
		</div>
	</section>
))

export default withModuleContext(
	projectListItemConnector(ListItemUnconnected, styles),
)
