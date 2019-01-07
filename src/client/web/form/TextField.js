import React, { memo } from 'react'

import TextField from '@material-ui/core/TextField'

import fieldInputConnector from 'sls-aws/src/client/logic/form/connectors/fieldInputConnector'

import textFieldSetInputHandler from 'sls-aws/src/client/logic/form/handlers/textFieldSetInputHandler'

export const InputField = memo(({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError, fieldType, fieldMultiline, fieldPlaceholder,
}) => (
	<TextField
		fullWidth
		id={fieldId}
		label={fieldLabel}
		type={fieldType}
		multiline={fieldMultiline}
		variant="outlined"
		value={fieldValue}
		error={fieldHasError}
		helperText={fieldError}
		placeholder={fieldPlaceholder}
		onChange={textFieldSetInputHandler(
			moduleKey, fieldPath, setInput, fieldType,
		)}
	/>
))

export default fieldInputConnector(InputField)
