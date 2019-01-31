import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import { withStyles } from '@material-ui/core/styles'
import Terms from 'sls-aws/src/client/web/base/StaticLayout'
import Link from 'sls-aws/src/client/web/base/Link'
import { TERMS_OF_SERVICE_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'
import styles from './style'
import pageContent from './pageContent'

const TermsOfService = ({ classes }) => (
	<Terms>
		{map(
			({ title, text, paragraph, id = null }) => (
				<section className={classes.section} key={title} id={id}>
					<h3 className={classes.sectionTitle}>{title}</h3>
					<p className={classes.mainParagraph}>{paragraph}</p>
					{text}
				</section>
			),
			pageContent(classes),
		)}
		<p className={classes.info}>
      	These updated terms will go into effect on February 1, 2019, at 12 a.m. Eastern
      	Time, and apply to all projects launched on Double Dog on or after that date.
		</p>
	</Terms>
)

TermsOfService.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TermsOfService)
