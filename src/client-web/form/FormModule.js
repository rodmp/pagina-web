import React from 'react'

import LoadingButton from 'sls-aws/src/client-web/base/LoadingButton'
import TextField from 'sls-aws/src/client-web/form/TextField'

import formModuleConnector from 'sls-aws/src/client-logic/form/connectors/formModuleConnector'

import withModuleContext from 'sls-aws/src/util/withModuleContext'


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
	formSubmits.map(([label, submitIndex, submitting]) => (
		<LoadingButton
			key={submitIndex}
			loading={submitting}
			onClick={handleSubmit(submitFormFn, moduleKey, submitIndex)}
		>
			{label}
		</LoadingButton>
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
			formSubmits={formSubmits}
			submitFormFn={submitForm}
		/>
		<input type="submit" className="hide" />
	</form>
)

export default withModuleContext(formModuleConnector(FormModule))
