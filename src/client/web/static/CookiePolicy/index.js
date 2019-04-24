import React from 'react'
import { map } from 'ramda'
import { withStyles } from '@material-ui/core/styles';
import Terms from 'root/src/client/web/base/StaticLayout'
import styles from './style'
import pageContent from './pageContent'

const CookiePolicy = ({ classes }) => (
	<Terms>
		{map(
			({ title, text }) => (
				<section className={classes.section} key={title}>
					<h3 className={classes.sectionTitle}>{title}</h3>
					{text}
				</section>
			),
			pageContent(classes),
		)}
	</Terms>
)

export default withStyles(styles)(CookiePolicy)
