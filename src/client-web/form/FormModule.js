import React from 'react'

import formModuleConnector from 'sls-aws/src/constants/connectors/formModuleConnector'

export const FormModule = () => (
	<div>this is a form</div>
)

export default formModuleConnector(FormModule)
