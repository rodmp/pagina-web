import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import { secondaryColor } from 'sls-aws/src/client/web/commonStyles'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	button: {
		color: secondaryColor,
		backgroundColor: 'transparent',
		textTransform: 'none',
		fontSize: 18,
	},
}

export const ExtraButtonUnstyled = memo(({
	classes, onClick, disabled, children,
}) => (
	<Button
		className={classes.button}
		onClick={onClick}
		disabled={disabled}
	>
		{children}
	</Button>
))

export default withStyles(styles)(ExtraButtonUnstyled)
