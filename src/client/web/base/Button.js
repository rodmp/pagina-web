import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import {
	primaryColor, secondaryColor,
} from 'root/src/client/web/commonStyles'
import {
	primarySquareButton,
	universalForm,
	noBackgroundButton,
} from 'root/src/client/web/componentTypes'

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
	primarySquareButton: {
		padding: 10,
		fontSize: 18,
		textTransform: 'none',
		marginBottom: 25,
		boxShadow: '0 5px 6px 0 rgba(0, 0, 0, 0.16)',
	},
	noBackgroundButton: {
		padding: 10,
		fontSize: 18,
		textTransform: 'none',
		marginBottom: 25,
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
	classes, onClick, disabled, children, buttonType, isStyled, disableRipple, additionalClass, formType,
}) => (
	<Button
		className={classNames(
			classes.button,
			{ [classes.styledButton]: isStyled },
			({ [classes.primarySquareButton]: buttonType === primarySquareButton || formType === universalForm }),
			({ [classes.noBackgroundButton]: buttonType === noBackgroundButton }),
			additionalClass,
		)}
		onClick={onClick}
		disabled={disabled}
		disableRipple
	>
		{children}
	</Button>
))

export default withStyles(styles)(ButtonUnstyled)
