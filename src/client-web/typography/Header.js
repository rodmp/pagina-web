import React, { memo } from 'react'

import { fontFamily } from 'sls-aws/src/client-web/commonStyles'
import { withStyles } from '@material-ui/core/styles'
import { sentenceCase } from 'change-case'

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
		{sentenceCase(children)}
	</div>
)))

export default withStyles(styles)(HeaderUnstyled)
