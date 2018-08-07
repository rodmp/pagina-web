import React from 'react'

import TextField from 'sls-aws/src/client-web/form/TextField'
import formModuleConnector from 'sls-aws/src/client-logic/form/connectors/formModuleConnector'

export const RenderInputs = ({ formFieldTypes, moduleKey }) => (
	formFieldTypes.map(([fieldId, fieldIndex, inputType]) => {
		switch (inputType) {
			case 'text':
				return (
					<TextField
						key={fieldId}
						fieldId={fieldId}
						fieldIndex={fieldIndex}
						moduleKey={moduleKey}
					/>
				)
			default:
				return (
					<div key={fieldId}>
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

export const FormModule = ({ formFieldTypes, moduleId, moduleKey }) => (
	<form
		onSubmit={submitForm}
		className="layout-column layout-align-center-stretch"
	>
		<RenderInputs
			moduleKey={moduleKey}
			moduleId={moduleId}
			formFieldTypes={formFieldTypes}
		/>
	</form>
)

export default formModuleConnector(FormModule)
