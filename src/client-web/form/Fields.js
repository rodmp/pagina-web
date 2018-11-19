import React, { memo } from 'react'

import TextField from 'sls-aws/src/client-web/form/TextField'
import SubForm from 'sls-aws/src/client-web/form/SubForm'

const Fields = memo(({ formFieldTypes, moduleKey }) => (
	formFieldTypes.map(([fieldId, fieldDescPath, inputType]) => {
		const props = {
			key: fieldId, fieldType: inputType,
			fieldId, fieldDescPath, moduleKey,
		}
		switch (inputType) {
			case 'text':
			case 'email':
			case 'password':
			case 'number':
				return <TextField {...props} />
			case 'subForm':
				return <SubForm {...props} />
			default:
				return (
					<div key={fieldId}>
						<p>inputType: {inputType}</p>
					</div>
				)
		}
	})
))

export default Fields
