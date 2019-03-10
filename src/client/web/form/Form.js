import React, { memo } from 'react'

import { orNull } from 'root/src/shared/util/ramdaPlus'
import { secondaryColor } from 'root/src/client/web/commonStyles'

import Fields from 'root/src/client/web/form/Fields'
import Submits from 'root/src/client/web/form/Submits'
import Header from 'root/src/client/web/typography/Header'
import Link from 'root/src/client/web/base/Link'
import Body from 'root/src/client/web/typography/Body'
import TertiaryBody from 'root/src/client/web/typography/TertiaryBody'
import formModuleConnector from 'root/src/client/logic/form/connectors/formModuleConnector'

import submitFormHandler from 'root/src/client/logic/form/handlers/submitFormHandler'

import withModuleContext from 'root/src/client/util/withModuleContext'

import classNames from 'classnames'

const styles = {
	space: {
		marginTop: 25,
		marginBottom: 25,
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
			color: secondaryColor,
			backgroundColor: 'transparent',
			textTransform: 'none',
			fontSize: 18,
		},
	},
}

export const FormModuleUnconnected = memo(({
	formFieldTypes, formTitle, moduleId, moduleKey, submitForm,
	preSubmitText, postSubmitText, preSubmitCaption, postSubmitCaption,
	classes, subTitle, backButton, children,
}) => (
	<div className="flex layout-row layout-align-center">
		<div className={classes.formContainer}>
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
				{children}
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
							<span>{backButton.label}</span>
						</Link>
					</div>
				)}
				<input type="submit" className="hide" />
			</form>
		</div>
	</div>
))

export default withModuleContext(
	formModuleConnector(FormModuleUnconnected, styles),
)
