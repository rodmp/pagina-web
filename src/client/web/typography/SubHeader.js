import React, { memo } from 'react'

import { fontFamily } from 'root/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 1.5,
	},
}

export const HeaderUnstyled = memo((({ classes, children }) => (
	<div className={classes.fontStyle}>
		{children}
	</div>
)))

export default withStyles(styles)(HeaderUnstyled)
