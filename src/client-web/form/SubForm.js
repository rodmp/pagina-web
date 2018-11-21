import React, { memo } from 'react'
import { map, range } from 'ramda'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


import Fields from 'sls-aws/src/client-web/form/Fields'
import subFormConnector from 'sls-aws/src/client-logic/form/connectors/subFormConnector'
import withModuleContext from 'sls-aws/src/util/withModuleContext'


import addAnotherHandler from 'sls-aws/src/client-logic/form/handers/addAnotherHandler'
import removeSubFormHandler from 'sls-aws/src/client-logic/form/handers/removeSubFormHandler'


export const SubForm = memo(({
	moduleKey, moduleId, subFormFieldTypes, fieldLabel, addSubForm,
	subFormCount, fieldId, removeSubForm,
}) => (
	<div>
		<div>{fieldLabel}</div>
		{map(
			subFormIndex => (
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
					/>
				</div>
			),
			range(0, subFormCount),
		)}
		<Button
			onClick={addAnotherHandler(moduleKey, fieldId, addSubForm)}
		>
			Add Another
		</Button>
	</div>
))

export default withModuleContext(
	subFormConnector(SubForm),
)
