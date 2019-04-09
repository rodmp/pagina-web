import React, { memo } from 'react'

import { withStyles } from '@material-ui/core/styles'

import classNames from 'classnames'
import { smMediaQuery } from 'root/src/client/web/commonStyles'

const styles = {
	maxWidth: {
		[smMediaQuery]: {
			maxWidth: 360,
		},
	},
}

export const MaxWidthContainerUnstyled = memo(({ children, isNavigation, classes }) => (
	<div
		className={classNames('flex layout-row layout-align-start', { 'flex-sm-65 flex-xs-90 flex-75': !isNavigation, 'flex-sm-100 flex-xs-100': isNavigation })}
	>
		{children}
	</div>
))

export default withStyles(styles)(MaxWidthContainerUnstyled)
