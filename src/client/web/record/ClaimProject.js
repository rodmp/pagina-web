import React, { memo } from 'react'
import SubHeader from 'root/src/client/web/typography/SubHeader'
import { withStyles } from '@material-ui/core/styles'
import cn from 'classnames'

const styles = {
	container: {
		margin: '65px auto',
		width: 360,
		'@media (max-width: 600px)': {
			width: 340,
		},
		'& > p': {
			fontSize: 20,
		},
	},
}

const ClaimProjectDescription = memo(
	({ classes }) => (
		<div className={cn('flex', classes.container)}>
			<SubHeader>Description:</SubHeader>
			<p>Lorem ipsum dolor sit amet, te est justo idque laoreet. Pri habeo quodsi tractatos in, usu ea alii postea. Commune atomorum definitionem qui et, vel semper hendrerit ut. Vix nulla rationibus et, an alia vidit diceret qui, cu est tacimates atomorum repudiare.</p>
		</div>
	),
)

export default withStyles(styles)(ClaimProjectDescription)
