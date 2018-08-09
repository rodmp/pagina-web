import React from 'react'

import Button from '@material-ui/core/Button'

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

export const handleSubmit = (submitFormFn, moduleKey, submitIndex) => (e) => {
	e.preventDefault()
	submitFormFn(moduleKey, submitIndex)
}

export const RenderSubmits = ({ formSubmits, moduleKey, submitFormFn }) => (
	formSubmits.map(([label, submitIndex]) => (
		<Button
			key={submitIndex}
			variant="contained"
			size="large"
			color="primary"
			onClick={handleSubmit(submitFormFn, moduleKey, submitIndex)}
		>
			{label}
		</Button>
	))
)

export const FormModule = ({
	formFieldTypes, formSubmits, moduleId, moduleKey, submitForm
}) => (
	<form
		onSubmit={handleSubmit(submitForm, moduleKey)}
		className="layout-column layout-align-center-stretch"
	>
		<RenderInputs
			moduleKey={moduleKey}
			moduleId={moduleId}
			formFieldTypes={formFieldTypes}
		/>
		<RenderSubmits
			moduleKey={moduleKey}
			moduleId={moduleId}
			formSubmits={formSubmits}
			submitFormFn={submitForm}
		/>
	</form>
)

export default formModuleConnector(FormModule)
