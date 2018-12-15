import React from 'react'
import { orNull } from 'sls-aws/src/util/ramdaPlus'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'


const buttonProgressStyles = {
	buttonProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
}

const RenderLoading = withStyles(buttonProgressStyles)(
	({ loading, classes }) => orNull(
		loading,
		<CircularProgress
			size={24}
			className={classes.buttonProgress}
		/>,
	),
)

const wrapperStyles = {
	wrapper: {
		position: 'relative',
	},
}

export default withStyles(wrapperStyles)(
	({
		children, onClick, classes, loading,
	}) => (
		<div className="flex layout-row layout-align-center">
			<div className={classes.wrapper}>
				<Button
					disabled={loading}
					onClick={onClick}
				>
					{children}
				</Button>
				<RenderLoading loading={loading} />
			</div>
		</div>
	),
)
