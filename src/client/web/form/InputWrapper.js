import React, { memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'

import TertiaryBody from 'sls-aws/src/client/web/typography/TertiaryBody'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	space: {
		marginBottom: 25,
	},
	subFieldText: {
		marginTop: 8,
	},
}

const Fields = memo(({ subFieldText, classes, children }) => (
	<div className={classes.space}>
		{children}
		{orNull(
			subFieldText,
			<div className={classes.subFieldText}>
				<TertiaryBody>{subFieldText}</TertiaryBody>
			</div>,
		)}
	</div>
))

export default withStyles(styles)(Fields)
