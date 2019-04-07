import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { styledTwitchButton } from './style'

const Button = ({ title, subtitle, backgroundColor, color, classes }) => (
	<button type="button" className={classes.button} style={{ color, backgroundColor }}>
		<i className="fab fa-twitch" />
		<div>
			<div>{title}</div>
			<span className="button-subtitle">{subtitle}</span>
		</div>
	</button>
)

Button.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
}


Button.defaultProps = {
	backgroundColor: '#800080',
	color: '#fff',
	subtitle: '',
}
export default withStyles(styledTwitchButton)(Button)
