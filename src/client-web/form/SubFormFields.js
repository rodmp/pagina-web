import React, { memo } from 'react'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


import Fields from 'sls-aws/src/client-web/form/Fields'
import subFormFieldsConnector from 'sls-aws/src/client-logic/form/connectors/subFormFieldsConnector'
import withModuleContext from 'sls-aws/src/util/withModuleContext'

import removeSubFormHandler from 'sls-aws/src/client-logic/form/handlers/removeSubFormHandler'


export const SubFormFields = memo(({
	moduleKey, moduleId, subFormIndex, subFormFieldTypes, fieldId,
	removeSubForm,
}) => (
	<div key={subFormIndex}>
		<IconButton
			onClick={removeSubFormHandler(
				moduleKey, fieldId, subFormIndex, removeSubForm,
			)}
		>
			<CloseIcon />
		</IconButton>
		<Fields
			moduleKey={moduleKey}
			moduleId={moduleId}
			formFieldTypes={subFormFieldTypes}
			subFormIndex={subFormIndex}
		/>
	</div>
))

export default withModuleContext(
	subFormFieldsConnector(SubFormFields),
)
