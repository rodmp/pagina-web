import React, { memo } from 'react'
import { map, range } from 'ramda'

import Button from '@material-ui/core/Button'

import SubFormFields from 'root/src/client/web/form/SubFormFields'

import subFormConnector from 'root/src/client/logic/form/connectors/subFormConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'

import addAnotherHandler from 'root/src/client/logic/form/handlers/addAnotherHandler'


export const SubFormUnconnected = memo(({
	moduleKey, moduleId, fieldLabel, addSubForm, subFormCount, fieldId,
	fieldDescPath, fieldPath,
}) => (
	<div>
		<div>{fieldLabel}</div>
		{map(
			subFormIndex => (
				<SubFormFields
					key={subFormIndex}
					subFormIndex={subFormIndex}
					moduleKey={moduleKey}
					moduleId={moduleId}
					fieldId={fieldId}
					fieldPath={fieldPath}
					fieldDescPath={fieldDescPath}
				/>
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
	subFormConnector(SubFormUnconnected),
)
