import React, { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'

import SubHeader from 'root/src/client/web/typography/SubHeader'

const styles = {
	image: {
		width: '100%',
	},
}

const Assignee = memo(({ displayName, image, username, classes }) => (
	<a
		href={`http://www.twitch.tv/${username}`}
		rel="noopener noreferrer"
		target="_blank"
		className="flex-190"
	>
		<div className="flex layout-row layout-align-space-between-center">
			<div className="flex-35">
				<img
					src={image}
					alt={username}
					className={classes.image}
				/>
			</div>
			<div className="flex-55">
				<SubHeader>{displayName}</SubHeader>
			</div>
		</div>
	</a>
))

export default withStyles(styles)(Assignee)
