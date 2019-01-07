import React, { memo } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = {

}

export const MaxWidthContainerUnstyled = memo(({ children }) => (
	<div
		className="flex layout-row layout-align-start flex-70 flex-xs-90"
	>
		{children}
	</div>
))

export default withStyles(styles)(MaxWidthContainerUnstyled)
