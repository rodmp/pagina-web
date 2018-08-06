import React from 'react'

import TextField from 'sls-aws/src/client-web/form/TextField'
import formModuleConnector from 'sls-aws/src/client-logic/form/connectors/formModuleConnector'

export const RenderInputs = ({ formFieldTypes }) => (
	formFieldTypes.map(([fieldIndex, inputType]) => {
		switch (inputType) {
			case 'text':
				return <TextField key={fieldIndex} fieldIndex={fieldIndex} />
			default:
				return (
					<div key={fieldIndex}>
						<p>inputType: {inputType}</p>
					</div>
				)
		}
	})
)

export const submitForm = fn => (e) => {
	e.preventDefault()
	fn()
}

export const FormModule = ({ formFieldTypes }) => (
	<form
		onSubmit={submitForm}
		className="layout-column layout-align-center-stretch"
	>
		<RenderInputs formFieldTypes={formFieldTypes} />
	</form>
)

export default formModuleConnector(FormModule)
