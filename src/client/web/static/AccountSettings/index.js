import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Settings from 'root/src/client/web/base/StaticLayout'

import LinkButton from 'root/src/client/web/base/LinkButton'
import styles from './style'
import content from './pageContent'

const { lead, buttons } = content

const AccountSettings = ({ classes }) => (
	<Settings>
		<section className={classes.section}>
			<h3 className={classes.sectionTitle}>{lead}</h3>
			<div className={classes.buttons}>
				{buttons.map(({ text, routeId, href }) => (
					<LinkButton additionalClass={classes.button} key={routeId || href} routeId={routeId} href={href}>{text}</LinkButton>
				))}
			</div>
		</section>
	</Settings>
)
export default withStyles(styles)(AccountSettings)
