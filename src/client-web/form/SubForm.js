import React, { memo } from 'react'

import Fields from 'sls-aws/src/client-web/form/Fields'
import subFormConnector from 'sls-aws/src/client-logic/form/connectors/subFormConnector'
import withModuleContext from 'sls-aws/src/util/withModuleContext'

export const SubForm = memo(({ moduleKey, moduleId, subFormFieldTypes }) => (
	<div>
		<Fields
			moduleKey={moduleKey}
			moduleId={moduleId}
			formFieldTypes={subFormFieldTypes}
		/>
		<button>add another</button>
	</div>
))

export default withModuleContext(
	subFormConnector(SubForm),
)
