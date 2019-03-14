import React, { memo } from 'react'

import Stepper from '@material-ui/core/Stepper'
import Form from 'root/src/client/web/form/Form'
import Submits from 'root/src/client/web/form/Submits'


import stepFormModuleConnector from 'root/src/client/logic/form/connectors/stepFormModuleConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'
import { orNull } from 'root/src/shared/util/ramdaPlus'

const styles = {

}

export const StepFormModuleUnconnected = memo(({
	classes,
	formFieldTypes, formTitle, formSubmits, submitForm,
	// preSubmitText, postSubmitText, preSubmitCaption, postSubmitCaption,
	// classes, subTitle, backButton,
	moduleKey, moduleId, moduleIndex,
	stepForms, stepFormCurrentPage, onLastStep, onFirstStep,
	stepFormNextPage, stepFormPrevPage,
}) => (
	<div>
		<Form
			formIndex={stepFormCurrentPage}
			moduleKey={moduleKey}
			moduleId={moduleId}
			moduleIndex={moduleIndex}
		/>
		{orNull(
			!onFirstStep,
			<button
				type="button"
				onClick={() => {
					stepFormPrevPage(moduleKey)
				}}
			>
				back
			</button>,
		)}
		{orNull(
			!onLastStep,
			<button
				type="button"
				onClick={() => {
					stepFormNextPage(moduleKey)
				}}
			>
				next
			</button>,
		)}
		{orNull(
			onLastStep,
			<div className={classes.space}>
				<Submits
					moduleKey={moduleKey}
					formSubmits={formSubmits}
					submitFormFn={submitForm}
				/>
			</div>,
		)}
	</div>
))

export default withModuleContext(
	stepFormModuleConnector(StepFormModuleUnconnected, styles),
)
