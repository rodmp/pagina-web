import React, { memo } from 'react'

import { fontFamily } from 'sls-aws/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: '38px',
		marginBottom: 14,
		textAlign: 'center',
	},
}

export const TitleUnstyled = memo((({ classes, children }) => (
	<div className={classes.fontStyle}>
		{children}
	</div>
)))

export default withStyles(styles)(TitleUnstyled)
