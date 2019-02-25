import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Settings from 'sls-aws/src/client/web/base/StaticLayout'

import LinkButton from 'sls-aws/src/client/web/base/LinkButton'
import styles from './style'
import content from './pageContent'

const { lead, buttons } = content

const AccountSettings = ({ classes }) => (
	<Settings>
		<section className={classes.section}>
			<h3 className={classes.sectionTitle}>{lead}</h3>
			<div className={classes.buttons}>
				{buttons.map(({ text, routeId }) => (
					<LinkButton additionalClass={classes.button} styled key={routeId} routeId={routeId}>{text}</LinkButton>
				))}
			</div>
		</section>
	</Settings>
)
export default withStyles(styles)(AccountSettings)
