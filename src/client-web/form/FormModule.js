import React from 'react'

import Fields from 'sls-aws/src/client-web/form/Fields'
import LoadingButton from 'sls-aws/src/client-web/base/LoadingButton'

import formModuleConnector from 'sls-aws/src/client-logic/form/connectors/formModuleConnector'

import withModuleContext from 'sls-aws/src/util/withModuleContext'


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
	formFieldTypes, formSubmits, moduleId, moduleKey, submitForm,
}) => (
	<form
		onSubmit={handleSubmit(submitForm, moduleKey)}
		className="layout-column layout-align-center-stretch"
	>
		<Fields
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
