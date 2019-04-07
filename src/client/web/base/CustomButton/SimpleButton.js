import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { styledSimpleButton } from './style'

const ACTIVE_BACKGROUND_COLOR = '#800080'
const ACTIVE_COLOR = '#fff'

const Button = ({ title, backgroundColor, color, onClick, active, classes }) => {
	const bgColor = active ? ACTIVE_BACKGROUND_COLOR : backgroundColor
	const textColor = active ? ACTIVE_COLOR : color
	return (
		<button
			type="button"
			className={classes.button}
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				color: textColor,
			}}
		>
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	backgroundColor: '#fff',
	color: '#000',
	onClick: null,
}

export default withStyles(styledSimpleButton)(Button)
