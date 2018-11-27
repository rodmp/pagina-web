import React, { memo } from 'react'

import TextField from '@material-ui/core/TextField'

import fieldInputConnector from 'sls-aws/src/client-logic/form/connectors/fieldInputConnector'

import textFieldSetInputHandler from 'sls-aws/src/client-logic/form/handers/textFieldSetInputHandler'

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
		onChange={textFieldSetInputHandler(
			moduleKey, fieldPath, setInput, fieldType,
		)}
	/>
))

export default fieldInputConnector(InputField)
