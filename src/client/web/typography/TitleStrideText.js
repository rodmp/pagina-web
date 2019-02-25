import React, { memo } from 'react'

import { fontFamily } from 'root/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

import CreditCard from '@material-ui/icons/CreditCard'

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		fontFamily,
		fontWeight: 500,
		fontSize: 20,
		lineHeight: 1.2,
	},
	required: {
		color: 'red',
	},
}

export const TitleStrideTextUnstyled = memo((({ classes, children, icon }) => (
	<div className={classes.container}>
		<span>
			{children}<span className={classes.required}>*</span>:
		</span>
		{icon && <CreditCard />}
	</div>
)))

export default withStyles(styles)(TitleStrideTextUnstyled)
