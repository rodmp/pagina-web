import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import {
	primaryColor, secondaryColor,
} from 'sls-aws/src/client/web/commonStyles'

import classNames from 'classnames'


import { withStyles } from '@material-ui/core/styles'

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
	styledButton: {
		padding: 10,
		fontSize: 18,
		textTransform: 'none',
		marginBottom: 25,
		boxShadow: '0 5px 6px 0 rgba(0, 0, 0, 0.16)',
	},
	primarySquareButton: {
	},
	noBackgroundButton: {
		color: primaryColor,
		backgroundColor: 'transparent',
		boxShadow: 'none',
		'&:hover': {
			color: secondaryColor,
			backgroundColor: 'transparent',
		},
	},
}

export const ButtonUnstyled = memo(({
	classes, onClick, disabled, children, buttonType, isStyled, disableRipple, additionalClass,
}) => (
	<Button
		className={classNames(
			classes.button,
			{ [classes.styledButton]: isStyled },
			({ [classes.primarySquareButton]: buttonType === 'primarySquareButton' }),
			({ [classes.noBackgroundButton]: buttonType === 'noBackgroundButton' }),
			(additionalClass),
		)}
		onClick={onClick}
		disabled={disabled}
		disableRipple={disableRipple}
	>
		{children}
	</Button>
))

export default withStyles(styles)(ButtonUnstyled)
