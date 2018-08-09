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
								formSubmitted: { type: 'boolean' },
							}
						},
						formInputs: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: { type: 'object' }
							}
						},
						fieldErrors: {
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

export const formModuleSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				schema: {
					type: 'object',
					properties: {},
				},
				fields: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							fieldId: { type: 'string' },
							inputType: { type: 'string' },
							textType: { type: 'string' },
							label: { type: 'string' },
						},
					},
				},
				submits: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							action: { type: 'function' },
							label: { type: 'string' },
						}
					},
				},
			},
		}
	}
}
export const formModuleLenses = lensesFromSchema(formModuleSchema)

// action payload lenses
export const viewPayloadFormHash = view(lensProp('formHash'))

export const viewPayloadInputId = view(lensProp('inputId'))
export const viewPayloadInputValue = view(lensProp('inputValue'))

export const viewPayloadErrorObj = view(lensProp('errorObj'))
