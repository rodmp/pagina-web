import React, { memo } from 'react'

import { fontFamily } from 'sls-aws/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: 1.25,
	},
	withBg: {
		fontFamily,
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: 1.25,
		backgroundColor: 'rgba(128, 0, 128, 0.7)',
		paddingTop: 90,
		paddingBottom: 90,
		paddingRight: 150,
		paddingLeft: 150,
		borderRadius: 30,
	},
}

export const TitleUnstyled = memo((({ classes, textWithBg, children }) => (
	<div className={textWithBg ? classes.withBg : classes.fontStyle}>
		{children}
	</div>
)))

export default withStyles(styles)(TitleUnstyled)
