import React from 'react'
import { orNull } from 'root/src/shared/util/ramdaPlus'

import Button from 'root/src/client/web/base/Button'
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
		width: '100%',
		marginBottom: 12,
	},
}

export default withStyles(wrapperStyles)(
	({
		children, onClick, classes, loading, formType,
	}) => (
			<div className="flex layout-row layout-align-center">
				<div className={classes.wrapper}>
					<Button
						disabled={loading}
						onClick={onClick}
						formType={formType}
					>
						{children}
					</Button>
					<RenderLoading loading={loading} />
				</div>
			</div>
		),
)
