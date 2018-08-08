import React from 'react'

import TextField from '@material-ui/core/TextField'

import fieldInputConnector from 'sls-aws/src/client-logic/form/connectors/fieldInputConnector'

const handleOnChange = (moduleKey, fieldId, action) => (e) => {
	e.preventDefault()
	action(moduleKey, fieldId, e.target.value)
}

export const InputField = ({
	moduleKey, fieldId, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError,
}) => (
	<TextField
		id={fieldId}
		label={fieldLabel}
		fullWidth
		value={fieldValue}
		error={fieldHasError}
		helperText={fieldError}
		onChange={handleOnChange(moduleKey, fieldId, setInput)}
	/>
)

export default fieldInputConnector(InputField)
