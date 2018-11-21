import React, { memo } from 'react'
import { map, range } from 'ramda'
import Button from '@material-ui/core/Button'

import Fields from 'sls-aws/src/client-web/form/Fields'
import subFormConnector from 'sls-aws/src/client-logic/form/connectors/subFormConnector'
import withModuleContext from 'sls-aws/src/util/withModuleContext'


import addAnotherHandler from 'sls-aws/src/client-logic/form/handers/addAnotherHandler'


export const SubForm = memo(({
	moduleKey, moduleId, subFormFieldTypes, fieldLabel, addSubForm,
	subFormCount, fieldId,
}) => (
	<div>
		<div>{fieldLabel}</div>
		{map(
			subFormIndex => (
				<Fields
					key={subFormIndex}
					moduleKey={moduleKey}
					moduleId={moduleId}
					formFieldTypes={subFormFieldTypes}
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
	subFormConnector(SubForm),
)
