import React, { memo } from 'react'
import { is, addIndex, map } from 'ramda'

import { fontFamily } from 'sls-aws/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'
import { ternary } from 'sls-aws/src/shared/util/ramdaPlus'

const styles = {
	fontStyle: {
		fontFamily,
		fontWeight: 500,
		fontSize: 20,
		lineHeight: 1.2,
	},
	required: {
		color: 'red',
	},
	subText: {
		display: 'block',
		marginTop: 10,
		fontWeight: 400,
	},
}

export const TitleFormTextUnstyled = memo((({ classes, children }) => (
	<div className={classes.fontStyle}>
		{ternary(
			is(Array, children),
			addIndex(map)((obj, i) => {
				if (obj.required) {
					if (obj.subText) {
						return (
							<span key={i}>
								<span>
									{obj.text}<span className={classes.required}>*</span>:
								</span>
								<span className={classes.subText}>{obj.subText}</span>
							</span>
						)
					}

					return (
						<span key={i}>
							{obj.text}<span className={classes.required}>*</span>:
						</span>
					)
				}
				return <span key={i}>{`${obj.text}:`}</span>
			}, children),
			<span>{children}</span>,
		)}
	</div>
)))

export default withStyles(styles)(TitleFormTextUnstyled)
