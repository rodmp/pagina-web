import React, { memo } from 'react'

import { orNull } from 'root/src/shared/util/ramdaPlus'

import TertiaryBody from 'root/src/client/web/typography/TertiaryBody'
import TitleFormText from 'root/src/client/web/typography/TitleFormText'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	space: {
		marginBottom: 25,
	},
	subFieldText: {
		marginTop: 8,
	},
	labelFieldText: {
		marginBottom: 8,
	},
}

const Fields = memo(
	({
		subFieldText,
		labelFieldText,
		classes,
		children,
	}) => (
		<div className={classes.space}>
			{orNull(
				labelFieldText,
				<div className={classes.labelFieldText}>
					<TitleFormText>{labelFieldText}</TitleFormText>
				</div>,
			)}
			{children}
			{orNull(
				subFieldText,
				<div className={classes.subFieldText}>
					<TertiaryBody>{subFieldText}</TertiaryBody>
				</div>,
			)}
		</div>
	),
)

export default withStyles(styles)(Fields)
