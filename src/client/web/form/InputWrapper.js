import React, { memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'
import classNames from 'classnames'

import TertiaryBody from 'sls-aws/src/client/web/typography/TertiaryBody'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	space: {
		marginBottom: 25,
	},
	subFieldText: {
		marginTop: 8,
	},
	inline: {
		display: 'inline',
	},
}

const Fields = memo(({ subFieldText, classes, children, formType }) => (
	<div className={classNames(classes.space, { [classes.inline]: (formType === 'paymentMethod') })}>
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
