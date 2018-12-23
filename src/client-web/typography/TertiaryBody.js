import React, { memo } from 'react'

import { fontFamily } from 'sls-aws/src/client-web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

import TextWithLinks from 'sls-aws/src/client-web/base/TextWithLinks'

const styles = {
	fontStyle: {
		fontFamily,
		fontWeight: 300,
		fontSize: 12,
		lineHeight: 1.2,
	},
}

export const TertiaryBodyUnstyled = memo((({ classes, children }) => (
	<div className={classes.fontStyle}>
		<TextWithLinks text={children} />
	</div>
)))

export default withStyles(styles)(TertiaryBodyUnstyled)
