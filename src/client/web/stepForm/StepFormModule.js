import React, { memo } from 'react'

import Stepper from '@material-ui/core/Stepper'
import Form from 'root/src/client/web/form/Form'
import Submits from 'root/src/client/web/form/Submits'
import LoadingButton from 'root/src/client/web/base/LoadingButton'
import Header from 'root/src/client/web/typography/Header'
import Button from 'root/src/client/web/base/Button'
import stepFormModuleConnector from 'root/src/client/logic/form/connectors/stepFormModuleConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'
import { orNull, ternary } from 'root/src/shared/util/ramdaPlus'

import classNames from 'classnames'

const styles = {
	space: {
		marginTop: 25,
		marginBottom: 25,
		textTransform: 'none',
	},
	formContainer: {
		width: 360,
		marginBottom: 50,

		'@media (max-width: 600px)': {
			width: 340,
		},
	},
	submits: {
		marginTop: 25,
		marginBottom: 25,

		'& span': {
			textTransform: 'none',
		},
	},
	backButton: {
		textAlign: 'center',
		marginBottom: 35,
		'& span': {
			backgroundColor: 'white',
		},

	},
	backButtonText: {
		color: '#800080',
		textTransform: 'none',
		fontSize: 18,
		zIndex: 2,
	},
}

export const StepFormModuleUnconnected = memo(({
	classes,
	formSubmits, submitForm,
	moduleKey, moduleId, moduleIndex,
	stepFormCurrentPage, onLastStep, onFirstStep, onStep,
	stepFormNextPage, stepFormPrevPage, savePartialForm,
}) => (
	<div className="flex layout-row layout-align-center">
		<div className={classes.formContainer}>
			<div
				className={classNames(
					classes.space,
					'layout-row layout-align-center',
				)}
			>
				<Header>{ternary(onFirstStep, 'Dare a Streamer', 'Payement Information')}</Header>
			</div>
			<Form
				formIndex={stepFormCurrentPage}
				moduleKey={moduleKey}
				moduleId={moduleId}
				moduleIndex={moduleIndex}
			/>
			{orNull(
				!onLastStep,
				<LoadingButton
					className={classes.submits}
					loading={false}
					onClick={() => {
						savePartialForm(moduleKey, onStep)
						stepFormNextPage(moduleKey)
					}}
				>
					<span className={classes.transformNone}>
							Next
					</span>
				</LoadingButton>,
			)}
			{orNull(
				onLastStep,
				<div className={classes.submits}>
					<Submits
						moduleKey={moduleKey}
						formSubmits={formSubmits}
						submitFormFn={submitForm}
					/>
				</div>,
			)}
			{orNull(
				!onFirstStep,
				<div className={classes.backButton}>
					<Button
						unstyled
						onClick={() => {
							stepFormPrevPage(moduleKey)
						}}
					>
						<span className={classes.backButtonText}>
								Go Back
						</span>
					</Button>
				</div>,
			)}
		</div>
	</div>
))

export default withModuleContext(
	stepFormModuleConnector(StepFormModuleUnconnected, styles),
)
