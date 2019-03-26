import React, { memo, useState } from 'react'

import { orNull } from 'root/src/shared/util/ramdaPlus'
import { secondaryColor } from 'root/src/client/web/commonStyles'
import { universalForm } from 'root/src/client/web/componentTypes'

import Fields from 'root/src/client/web/form/Fields'
import Submits from 'root/src/client/web/form/Submits'
import Header from 'root/src/client/web/typography/Header'
import Body from 'root/src/client/web/typography/Body'
import Link from 'root/src/client/web/base/Link'
import TertiaryBody from 'root/src/client/web/typography/TertiaryBody'
import FormTitle from 'root/src/client/web/typography/FormTitle'
import formModuleConnector from 'root/src/client/logic/form/connectors/formModuleConnector'

import backToPrevHandler from 'root/src/client/logic/form/handlers/backToPrevHandler'
import goToViewProjectHandler from 'root/src/client/logic/project/handlers/goToViewProjectHandler'
import submitFormHandler from 'root/src/client/logic/form/handlers/submitFormHandler'

import withModuleContext from 'root/src/client/util/withModuleContext'

import classNames from 'classnames'

const styles = {
	space: {
		marginTop: 25,
		marginBottom: 25,
	},
	noMarginTop: {
		marginTop: 0,
	},
	noMarginBottom: {
		marginBottom: 0,
	},
	paymentTitle: {
		fontSize: 32,
	},
	formContainer: {
		width: 360,

		'@media (max-width: 600px)': {
			width: 340,
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

export const FormModuleUnconnected = memo(({
	formFieldTypes, formTitle, formSubmits, moduleId, moduleKey, submitForm,
	preSubmitText, postSubmitText, preSubmitCaption, postSubmitCaption,
	classes, subTitle, formType, backButton,
}) => {
	const [wasSubmitted, setWasSubmitted] = useState(false)
	return (
		<div className="flex layout-row layout-align-center">
			<div className={classes.formContainer}>
				{orNull(
					formTitle,
					<div
						className={classNames(
							classes.space,
							{ [classes.noMarginTop]: (formType === universalForm) },
							'layout-row layout-align-center',
						)}
					>
						<Header additionalClass={classNames({ [classes.paymentTitle]: (formType === universalForm) })}>{formTitle}</Header>
					</div>,
				)}
				{orNull(
					subTitle,
					<div
						className={classNames(
							classes.space,
							'layout-row layout-align-center',
						)}
					>
						<Body>{subTitle}</Body>
					</div>,
				)}
				<form
					onSubmit={submitFormHandler(submitForm, moduleKey, null, setWasSubmitted)}
					className={classNames({ 'layout-column layout-align-center-stretch': (formType !== universalForm) })}
				>
					<Fields
						moduleKey={moduleKey}
						moduleId={moduleId}
						formFieldTypes={formFieldTypes}
						formType={formType}
						wasSubmitted={wasSubmitted}
					/>
					{orNull(
						preSubmitText,
						<div
							className={classNames(
								classes.space,
								'layout-row layout-align-center',
							)}
						>
							<Body>{preSubmitText}</Body>
						</div>,
					)}
					{orNull(
						preSubmitCaption,
						<div
							className={classNames(
								classes.space,
								'layout-row layout-align-center',
							)}
						>
							<TertiaryBody>{preSubmitCaption}</TertiaryBody>
						</div>,
					)}
					<div className={classNames(
						classes.space,
						{ [classes.noMarginBottom]: (formType === universalForm) },
					)}
					>
						<Submits
							moduleKey={moduleKey}
							formSubmits={formSubmits}
							submitFormFn={submitForm}
							formType={formType}
							setWasSubmitted={setWasSubmitted}
						/>
					</div>
					{orNull(
						postSubmitText,
						<div className="flex layout-row layout-align-center">
							<Body>{postSubmitText}</Body>
						</div>,
					)}
					{orNull(
						postSubmitCaption,
						<div className="flex layout-row layout-align-center">
							<TertiaryBody>{postSubmitCaption}</TertiaryBody>
						</div>,
					)}
					{backButton && (
						<div className={classes.backButton}>
							<Link routeId={backButton.routeId}>
								<span className={classes.backButtonText}>{backButton.label}</span>
							</Link>
						</div>
					)}
					<input type="submit" className="hide" />
				</form>
			</div>
		</div>
	)
})

export default withModuleContext(
	formModuleConnector(FormModuleUnconnected, styles),
)
