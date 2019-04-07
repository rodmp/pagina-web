import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import {
	primaryColor, secondaryColor,
} from 'root/src/client/web/commonStyles'

import classNames from 'classnames'
import linkConnector from 'root/src/client/logic/app/connectors/linkConnector'

import linkHandler from 'root/src/client/logic/app/handlers/linkHandler'

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

export const BaseLink = memo(({
	pushRoute, routeId, routeParams,
	children, classes, additionalClass,
	isStyled, buttonType, disabled, disableRipple,
}) => (
	<Button
		className={classNames(
			classes.button,
			{ [classes.styledButton]: isStyled },
			({ [classes.primarySquareButton]: buttonType === 'primarySquareButton' }),
			({ [classes.noBackgroundButton]: buttonType === 'noBackgroundButton' }),
			additionalClass,
		)}
		onClick={linkHandler(routeId, routeParams, pushRoute)}
		disabled={disabled}
		disableRipple={disableRipple}
	>
		{children}
	</Button>
))

export default linkConnector(BaseLink, styles)
