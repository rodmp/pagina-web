import React, { memo } from 'react'

import TextField from '@material-ui/core/TextField'

import fieldInputConnector from 'sls-aws/src/client-logic/form/connectors/fieldInputConnector'

const handleOnChange = (moduleKey, fieldId, action) => (e) => {
	e.preventDefault()
	action(moduleKey, fieldId, e.target.value)
}

export const InputField = memo(({
	moduleKey, fieldId, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError, fieldType,
}) => (
	<TextField
		id={fieldId}
		label={fieldLabel}
		type={fieldType}
		fullWidth
		value={fieldValue}
		error={fieldHasError}
		helperText={fieldError}
		onChange={handleOnChange(moduleKey, fieldId, setInput)}
	/>
))

export default fieldInputConnector(InputField)
