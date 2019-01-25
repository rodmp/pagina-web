import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import styles from './style'

const Card = ({ icon, title, children, classes }) => (
	<div className={classNames('flex', 'layout-column', 'layout-align-start-center', classes.card)}>
		<div className={classes.iconWrapper}>
			<img src={icon} alt={title} />
		</div>
		<h3 className={classes.cardTitle}>{title}</h3>
		{children}
	</div>
)

Card.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
}

export default withStyles(styles)(Card)
