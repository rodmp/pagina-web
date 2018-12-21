import React, { memo } from 'react'

import LoadingButton from 'sls-aws/src/client-web/base/LoadingButton'

import { withStyles } from '@material-ui/core/styles'

import submitFormHandler from 'sls-aws/src/client-logic/form/handlers/submitFormHandler'

const styles = {
	submitWrapper: {
		marginTop: 58,
	},
}

export const SubmitsUnstyled = memo(({
	formSubmits, moduleKey, submitFormFn, classes,
}) => (
	<div className={classes.submitWrapper}>
		{formSubmits.map(([label, submitIndex, submitting]) => (
			<LoadingButton
				key={submitIndex}
				loading={submitting}
				onClick={
					submitFormHandler(submitFormFn, moduleKey, submitIndex)
				}
			>
				{label}
			</LoadingButton>
		))}
	</div>
))

export default withStyles(styles)(SubmitsUnstyled)
