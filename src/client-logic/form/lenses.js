import { view, lensProp } from 'ramda'

import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

import { variableSchemaKey } from 'sls-aws/src/util/commonLenses'

const formSchema = {
	type: 'object',
	properties: {
		form: {
			type: 'object',
			patternProperties: {
				[variableSchemaKey]: {
					type: 'object',
					properties: {
						formData: {
							type: 'object',
							properties: {
								formSubmitting: { type: 'boolean' },
								formSubmitted: { type: 'boolean' }
							}
						},
						formInputs: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: { type: 'object' }
							}
						},
						fieldData: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: {
									type: 'object',
									properties: {
										dirty: { type: 'boolean' },
										valid: { type: 'boolean' },
										error: { type: 'boolean' },
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

export const formStoreLenses = lensesFromSchema(formSchema)

// action payload lenses
export const viewPayloadFormHash = view(lensProp('formHash'))

export const viewPayloadInputId = view(lensProp('inputId'))
export const viewPayloadInputValue = view(lensProp('inputValue'))
