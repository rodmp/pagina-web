import React from 'react'
import { map } from 'ramda'
import { withStyles } from '@material-ui/core/styles';
import Terms from 'sls-aws/src/client/web/base/StaticLayout'
import styles from './style'
import Anchors from './Anchors'
import pageContent from './pageContent'

const PrivacyPolicy = ({ classes }) => (
	<Terms>
		<Anchors classes={classes} />
		<React.Fragment>
			{map(({ title, id, text }) => (
				<section className={classes.section} id={id} key={id}>
					{title ? <h3 className={classes.sectionTitle}>{title}</h3> : null}
					{text}
				</section>
			), pageContent(classes))}
		</React.Fragment>
	</Terms>
)

export default withStyles(styles)(PrivacyPolicy)
