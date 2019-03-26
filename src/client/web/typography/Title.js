import React, { memo } from 'react'

import classNames from 'classnames'

import { fontFamily } from 'root/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: '38px',
		marginBottom: 14,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	notUpperCase: {
		textTransform: 'none',
	},
}

export const TitleUnstyled = memo((({ classes, children, notUpperCase }) => (
	<div className={classNames(classes.fontStyle, { [classes.notUpperCase]: notUpperCase })}>
		{children}
	</div>
)))

export default withStyles(styles)(TitleUnstyled)
