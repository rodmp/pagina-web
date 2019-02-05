import React, { memo } from 'react'

import withModuleContext from 'sls-aws/src/client/util/withModuleContext'
import projectListItemConnector from 'sls-aws/src/client/logic/project/connectors/projectListItemConnector'
import goToViewProjectHandler from 'sls-aws/src/client/logic/project/handlers/goToViewProjectHandler'

import Button from 'sls-aws/src/client/web/base/Button'
import ShareMenu from 'sls-aws/src/client/web/base/ShareMenu'
import Header from 'sls-aws/src/client/web/typography/Header'
import Body from 'sls-aws/src/client/web/typography/Body'
import TertiaryBody from 'sls-aws/src/client/web/typography/TertiaryBody'
import classNames from 'classnames'

const styles = {
	cardRoot: {
		padding: [[0, 10, 20]],
		color: 'white',
	},
	cardBg: {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	cardHeader: {
		height: 70,
		backgroundColor: 'rgba(0, 0, 0, 0.74)',
		padding: [[0, 16]],
	},
	headerText: {
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	cardFooter: {
		height: 145,
		backgroundColor: 'rgba(0, 0, 0, 0.74)',
		padding: [[10, 16]],
	},
	cardGameTitle: {
		paddingBottom: 5,
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
		width: 100,
		height: 100,
	},
}

export const ListItemUnconnected = memo(({
	recordId, pushRoute, projectTitle, projectDescription, classes,
	projectGameImage, projectAssigneesImages, projectShareUrl,
}) => (
	<div
		className={classNames(
			classes.cardRoot,
			'flex-xs-100 flex-sm-100 flex-md-50 flex-lg-25 flex-xl-25',
			'layout-column layout-align-start-stretch',
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
					<Header>{projectTitle}</Header>
				</div>
				<ShareMenu url={projectShareUrl} />
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
					<TertiaryBody>Hearthstone</TertiaryBody>
				</div>
				<div className={classes.description}>
					<Body>{projectDescription}</Body>
				</div>
				<div>
					<Button
						onClick={goToViewProjectHandler(recordId, pushRoute)}
					>
						pledge
					</Button>
				</div>
			</div>
		</div>
	</div>
))

export default withModuleContext(
	projectListItemConnector(ListItemUnconnected, styles),
)
