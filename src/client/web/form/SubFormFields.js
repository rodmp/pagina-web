import React, { memo } from 'react'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


import Fields from 'root/src/client/web/form/Fields'
import subFormFieldsConnector from 'root/src/client/logic/form/connectors/subFormFieldsConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'

import removeSubFormHandler from 'root/src/client/logic/form/handlers/removeSubFormHandler'


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
