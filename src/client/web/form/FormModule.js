import React, { memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'

import Fields from 'sls-aws/src/client/web/form/Fields'
import Submits from 'sls-aws/src/client/web/form/Submits'
import Header from 'sls-aws/src/client/web/typography/Header'
import Body from 'sls-aws/src/client/web/typography/Body'
import TertiaryBody from 'sls-aws/src/client/web/typography/TertiaryBody'
import formModuleConnector from 'sls-aws/src/client/logic/form/connectors/formModuleConnector'

import submitFormHandler from 'sls-aws/src/client/logic/form/handlers/submitFormHandler'

import withModuleContext from 'sls-aws/src/client/util/withModuleContext'

import classNames from 'classnames'

const styles = {
	space: {
		marginBottom: 25,
	},
}

export const FormModuleUnconnected = memo(({
	formFieldTypes, formTitle, formSubmits, moduleId, moduleKey, submitForm,
	preSubmitText, postSubmitText, preSubmitCaption, postSubmitCaption,
	classes, subTitle,
}) => (
	<div className="flex layout-row layout-align-center">
		<div className="flex-40 flex-xs-90">
			{orNull(
				formTitle,
				<div
					className={classNames(
						classes.space,
						'layout-row layout-align-center',
					)}
				>
					<Header>{formTitle}</Header>
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
				onSubmit={submitFormHandler(submitForm, moduleKey)}
				className="layout-column layout-align-center-stretch"
			>
				<Fields
					moduleKey={moduleKey}
					moduleId={moduleId}
					formFieldTypes={formFieldTypes}
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
				<div className={classes.space}>
					<Submits
						moduleKey={moduleKey}
						formSubmits={formSubmits}
						submitFormFn={submitForm}
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
				<input type="submit" className="hide" />
			</form>
		</div>
	</div>
))

export default withModuleContext(
	formModuleConnector(FormModuleUnconnected, styles)
)
