import React, { memo } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	fieldMax: {
		fontSize: 16,
		color: '#757575',
	},
}

export const MinMaxLengthUnstyled = memo(({ classes, children }) => (
	<div className="flex layout-row layout-align-end">
		<span className={classes.fieldMax}>{children}</span>
	</div>
))

export default withStyles(styles)(MinMaxLengthUnstyled)
