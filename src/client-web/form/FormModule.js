import React, { memo } from 'react'

import Fields from 'sls-aws/src/client-web/form/Fields'
import Submits from 'sls-aws/src/client-web/form/Submits'
import Header from 'sls-aws/src/client-web/typography/Header'
import formModuleConnector from 'sls-aws/src/client-logic/form/connectors/formModuleConnector'

import submitFormHandler from 'sls-aws/src/client-logic/form/handlers/submitFormHandler'

import withModuleContext from 'sls-aws/src/util/withModuleContext'

import classNames from 'classnames'

const styles = {
	header: {
		marginBottom: 58,
	},
}

export const FormModule = memo(({
	formFieldTypes, formTitle, formSubmits, moduleId, moduleKey, submitForm,
	classes,
}) => (
	<div className="flex layout-row layout-align-center">
		<div className="flex-40 flex-xs-90">
			<div
				className={classNames(
					classes.header,
					'layout-row layout-align-center',
				)}
			>
				<Header>{formTitle}</Header>
			</div>
			<form
				onSubmit={submitFormHandler(submitForm, moduleKey)}
				className="layout-column layout-align-center-stretch"
			>
				<Fields
					moduleKey={moduleKey}
					moduleId={moduleId}
					formFieldTypes={formFieldTypes}
				/>
				<Submits
					moduleKey={moduleKey}
					formSubmits={formSubmits}
					submitFormFn={submitForm}
				/>
				<input type="submit" className="hide" />
			</form>
		</div>
	</div>
))

export default withModuleContext(formModuleConnector(FormModule, styles))
