import React, { memo } from 'react'

import { withStyles } from '@material-ui/core/styles'

import classNames from 'classnames'

const styles = {

}

export const MaxWidthContainerUnstyled = memo(({ children, isNavigation }) => (
	<div
		className={classNames('flex layout-row layout-align-start flex-xs-90 flex-sm-90', { 'flex-75': !isNavigation })}
	>
		{children}
	</div>
))

export default withStyles(styles)(MaxWidthContainerUnstyled)
