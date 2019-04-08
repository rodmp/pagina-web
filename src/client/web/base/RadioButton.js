import React, { memo } from 'react'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const checkMarkSize = 10

const styles = {
	radioButton: {
		position: 'absolute',
		opacity: 0,
		cursor: 'pointer',
		height: 0,
		width: 0,
	},
	container: {
		display: 'block',
		position: 'relative',
		marginRight: 13,
		cursor: 'pointer',
		fontSize: 16,
		height: 16,
		width: 16,
	},
	checkMarkContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		borderRadius: '50%',
		border: '2px solid #800080',
	},
	checkMark: {
		position: 'absolute',
		top: `calc(50% - ${checkMarkSize / 2}px)`,
		left: `calc(50% - ${checkMarkSize / 2}px)`,
		height: checkMarkSize,
		width: checkMarkSize,
		borderRadius: '50%',
	},
	checked: {
		backgroundColor: '#800080',
	},
}

const RadioButton = memo(({ classes, id, checked, children }) => (
	<div className={classes.wrapper}>
		<label id={id} className={classes.container}>
			<input
				className={classes.radioButton}
				type="radio"
			/>
			<span className={classes.checkMarkContainer}>
				<span className={classNames(classes.checkMark, { [classes.checked]: checked })} />
			</span>
		</label>
	</div>
))

export default withStyles(styles)(RadioButton)
