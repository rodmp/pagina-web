import React, { memo } from 'react'

import TextField from 'sls-aws/src/client-web/form/TextField'
import SubForm from 'sls-aws/src/client-web/form/SubForm'
import StripeCard from 'sls-aws/src/client-web/form/StripeCard'

import InputWrapper from 'sls-aws/src/client-web/form/InputWrapper'

const Fields = memo(({
	formFieldTypes, moduleKey,
}) => formFieldTypes.map(([
	fieldPath, fieldDescPath, inputType, fieldId, subFieldText,
]) => {
	const wrapperProps = { subFieldText, key: fieldId }
	const props = {
		fieldType: inputType,
		fieldId,
		fieldDescPath,
		moduleKey,
		fieldPath,
	}
	switch (inputType) {
		case 'text':
		case 'email':
		case 'password':
		case 'number':
			return (
				<InputWrapper {...wrapperProps}>
					<TextField {...props} />
				</InputWrapper>
			)
		case 'subForm':
			return (
				<InputWrapper {...wrapperProps}>
					<SubForm {...props} />
				</InputWrapper>
			)
		case 'stripeCard':
			return (
				<InputWrapper {...wrapperProps}>
					<StripeCard {...props} />
				</InputWrapper>
			)
		default:
			return (
				<div key={fieldId}>
					<p>inputType: {inputType}</p>
				</div>
			)
	}
}))

export default Fields
