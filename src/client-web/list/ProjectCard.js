import React, { memo } from 'react'

import withModuleContext from 'sls-aws/src/util/withModuleContext'
import projectListItemConnector from 'sls-aws/src/client-logic/project/connectors/projectListItemConnector'
import goToViewProjectHandler from 'sls-aws/src/client-logic/project/handlers/goToViewProjectHandler'

import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

import Header from 'sls-aws/src/client-web/typography/Header'
import Body from 'sls-aws/src/client-web/typography/Body'
import TertiaryBody from 'sls-aws/src/client-web/typography/TertiaryBody'
import classNames from 'classnames'

const styles = {
	cardRoot: {
		padding: [[0, 10]],
		color: 'white',
	},
	cardBg: {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	cardHeader: {
		height: 75,
		backgroundColor: 'rgba(0, 0, 0, 0.74)',
		padding: [[0, 16]],
	},
	cardFooter: {
		height: 130,
		backgroundColor: 'rgba(0, 0, 0, 0.74)',
		padding: [[0, 16]],
	},
	description: {
		height: 40,
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
}

export const ListItemUnconnected = memo(({
	recordId, pushRoute, projectTitle, projectDescription, classes,
}) => (
	<div
		className={classNames(
			classes.cardRoot,
			'flex-xs-100 flex-md-33 flex-sm-50 flex-lg-33 flex-gt-lg-33',
			'layout-column layout-align-start-stretch',
		)}
	>
		<div
			className={classNames(
				'flex layout-column',
				classes.cardBg,
			)}
			style={{
				backgroundImage: 'url(https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-144x240.jpg)',
			}}
		>
			<div
				className={classNames(
					classes.cardHeader,
					'flex layout-row layout-align-start-center',
				)}
			>
				<Header>{projectTitle}</Header>
			</div>
			<div>image arr</div>
			<div
				className={classNames(
					'flex layout-column layout-align-space-around',
					classes.cardFooter,
				)}
			>
				<div>
					<TertiaryBody>Hearthstone</TertiaryBody>
				</div>
				<div className={classes.description}>
					<Body>{projectDescription}</Body>
				</div>
				<button>pledge</button>
			</div>
		</div>
	</div>
))

export default withModuleContext(
	projectListItemConnector(ListItemUnconnected, styles),
)
