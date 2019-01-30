import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Terms from 'sls-aws/src/client/web/base/StaticLayout'
import styles from './style'
import rules from './pageContent'

const RulesOfUse = ({ classes }) => (
	<Terms>
		<section className={classes.section}>
			<p>
        We prohibit projects that are illegal, heavily regulated, or potentially dangerous for
        deliverers.
			</p>
			<section>
				<div>Prohibited content:</div>
				<ul className={classes.list}>
					{rules.map((rule, idx) => (
						<li key={idx}>{rule}</li>
					))}
				</ul>
			</section>
		</section>
	</Terms>
)
export default withStyles(styles)(RulesOfUse)
