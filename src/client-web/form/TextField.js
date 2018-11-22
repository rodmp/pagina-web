import React, { memo } from 'react'

import TextField from '@material-ui/core/TextField'

import fieldInputConnector from 'sls-aws/src/client-logic/form/connectors/fieldInputConnector'

const handleOnChange = (moduleKey, fieldPath, action) => (e) => {
	e.preventDefault()
	action(moduleKey, fieldPath, e.target.value)
}

export const InputField = memo(({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError,
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
		onChange={handleOnChange(moduleKey, fieldPath, setInput)}
	/>
))

export default fieldInputConnector(InputField)
