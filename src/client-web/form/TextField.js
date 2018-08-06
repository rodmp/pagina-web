import React from 'react'

import TextField from '@material-ui/core/TextField'

import fieldInputConnector from 'sls-aws/src/client-logic/form/connectors/fieldInputConnector'

const handleOnChange = (formHash, inputId, action) => (e) => {
	e.preventDefault()
	action(formHash, inputId, e.target.value)
}

export const InputField = ({ moduleKey, moduleId, fieldIndex, setInput }) => (
	<TextField
		id="name"
		label="test"
		fullWidth
		value={moduleKey}
		onChange={handleOnChange(moduleId, fieldIndex, setInput)}
	/>
)

export default fieldInputConnector(InputField)
