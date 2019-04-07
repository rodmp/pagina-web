import React, { memo } from 'react'

import LoadingButton from 'root/src/client/web/base/LoadingButton'

import submitFormHandler from 'root/src/client/logic/form/handlers/submitFormHandler'

export const SubmitsUnstyled = memo(({
	formSubmits, moduleKey, submitFormFn,
}) => (
	<div>
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

export default SubmitsUnstyled
