import React from 'react'
import { map } from 'ramda'
import { withStyles } from '@material-ui/core/styles';
import Terms from 'root/src/client/web/base/StaticLayout'
import styles from './style'
import pageContent from './pageContent'

const CopyrightPolicy = ({ classes }) => (
	<Terms>
		<section>
		It is our policy to respond to clear notices of alleged copyright 
		infringement in accordance with 
		the <link href="https://www.copyright.gov/legislation/dmca.pdf">
		Digital Millennium Copyright Act of 1998.</link> Double Dog removes 
		material that is the subject of a compliant DMCA takedown notice. 
		Section 512 of the DMCA provides the rules for reporting copyright 
		infringement and for filing a counter-notification.
		</section>
		<React.Fragment>
			{map(({ title, text }) => (
				<section className={classes.section}>
					{title ? <h3 className={classes.sectionTitle}>{title}</h3> : null}
					{text}
				</section>
			), pageContent(classes))}
		</React.Fragment>
	</Terms>
)

export default withStyles(styles)(CopyrightPolicy)
