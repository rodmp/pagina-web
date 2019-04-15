import React, { memo } from 'react'
import styled from 'root/src/client/web/base/StaticLayout/style'
import { withStyles } from '@material-ui/core/styles'
import Link from 'root/src/client/web/base/Link'
import { orNull } from 'root/src/shared/util/ramdaPlus'

const color = 'rgba(0, 0, 0, 0.87)'
const styles = {
	section: {
		...styled.section,
	},
	title: {
		fontSize: 32,
		textAlign: 'center',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 150,
	},
	link: {
		marginBottom: 40,
		fontWeight: 'bold',
		textDecoration: 'underline',
		fontSize: 18,
		textAlign: 'center',
		position: 'relative',
		color,
	},
}

const GetUserTwitch = memo(({ userData: { displayName, isNotListed }, pageContent, classes }) => (
	<div>
		{orNull(displayName,
			<section className={classes.section}>
				<h3 className={classes.title}>{pageContent.title}</h3>
				<p className={classes.text}>
					{pageContent.text} {displayName}!<br />
					{orNull(isNotListed,
						"You aren't listed for this dare.")}
				</p>
				<Link routeId={pageContent.link}>
					<p className={classes.link}>{pageContent.linkLabel}</p>
				</Link>
			</section>)}
	</div>
))

export default withStyles(styles)(GetUserTwitch)
