import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import {
	primaryColor, secondaryColor,
} from 'root/src/client/web/commonStyles'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = {
	button: {
		color: 'white',
		backgroundColor: primaryColor,
		'&:hover': {
			backgroundColor: secondaryColor,
		},
		width: '100%',
		height: 48.1,
	},
	smallButton: {
		width: '20%',
		margin: 'auto 0',
		marginLeft: '5px',
	},
}

export const ButtonUnstyled = memo(({
	classes, onClick, disabled, children, style, isSmallButton,
}) => (
	<Button
		className={classNames(classes.button, style, { [classes.smallButton]: isSmallButton })}
		onClick={onClick}
		disabled={disabled}
	>
		{children}
	</Button>
))

export default withStyles(styles)(ButtonUnstyled)
