import React, { memo } from 'react'

import { fontFamily } from 'root/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

import TextWithLinks from 'root/src/client/web/base/TextWithLinks'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 16,
		lineHeight: 1.2,
	},
}

export const BodyUnstyled = memo((({ classes, children }) => (
	<div className={classes.fontStyle}>
		<TextWithLinks text={children} />
	</div>
)))

export default withStyles(styles)(BodyUnstyled)
