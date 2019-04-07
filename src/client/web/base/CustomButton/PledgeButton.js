import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { styledPledgeButton } from './style'

const Button = ({ title, backgroundColor, color, classes }) => (
	<button className={classes.button} type="button" style={{ backgroundColor, color }}>{title}</button>
)

Button.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
}


Button.defaultProps = {
	backgroundColor: '#800080',
	color: '#fff',
}

export default withStyles(styledPledgeButton)(Button)
