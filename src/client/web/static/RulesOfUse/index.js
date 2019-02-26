import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Terms from 'root/src/client/web/base/StaticLayout'
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
			<p>
		We also prohibit any content that violates the Community Guidelines or Terms of
		platform sites streamers deliver content on. Adhere
		to <a href="https://www.twitch.tv/p/legal/community-guidelines/" target="__blank">
		Twitch's Community Guidelines</a> if posting or streaming on Twitch, 
		or <a href="https://www.youtube.com/yt/about/policies" target="__blank">
		YouTube's Community Guidelines</a> if posting or streaming on YouTube.
			</p>
		</section>
	</Terms>
)
export default withStyles(styles)(RulesOfUse)
