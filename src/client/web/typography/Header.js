import React, { memo } from 'react'

import classNames from 'classnames';

import { fontFamily } from 'root/src/client/web/commonStyles'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 32,
		fontWeight: 500,
		lineHeight: 1.5,
	},
}

export const HeaderUnstyled = memo((({ classes, children, additionalClass }) => (
	<div className={classNames(classes.fontStyle, additionalClass)}>
		{children}
	</div>
)))

export default withStyles(styles)(HeaderUnstyled)
