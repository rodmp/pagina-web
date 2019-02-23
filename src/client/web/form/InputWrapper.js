import React, { memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'
import classNames from 'classnames'

import TertiaryBody from 'sls-aws/src/client/web/typography/TertiaryBody'
import TitleFormText from 'sls-aws/src/client/web/typography/TitleFormText'
import ExtraButton from 'sls-aws/src/client/web/base/ExtraButton'

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
	labelFieldText: {
		marginBottom: 8,
	},
	extraButton: {
		marginTop: 9,
	},
}

const Fields = memo(
	({
		subFieldText,
		labelFieldText,
		extraButton,
		classes,
		children,
		formType,
	}) => (
		<div className={classNames(classes.space, { [classes.inline]: (formType === 'paymentMethod') })}>
			{orNull(
				subFieldText,
				<div className={classes.subFieldText}>
					<TitleFormText>{subFieldText}</TitleFormText>
				</div>,
			)}
			{children}
			{orNull(
				extraButton,
				<div className={classes.extraButton}>
					<ExtraButton>
						{extraButton}
					</ExtraButton>
				</div>,
			)}
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
