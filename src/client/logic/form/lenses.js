import { view, lensProp } from 'ramda'

import lensesFromSchema from 'root/src/shared/util/lensesFromSchema'

import { variableSchemaKey } from 'root/src/shared/util/commonLenses'

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
							},
						},
						formInputs: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: { type: 'object' },
							},
						},
						fieldErrors: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: { type: 'object' },
							},
						},
						stepFormPage: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: { type: 'object' },
							},
						},
						fieldData: {
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: {
									type: 'object',
									properties: {
										dirty: { type: 'boolean' },
										valid: { type: 'boolean' },
									},
								},
							},
						},
						formStripe: {
							// this is really a function
							type: 'string',
						},
					},
				},
			},
		},
	},
}

export const formStoreLenses = lensesFromSchema(formSchema)

const formModuleCommon = {
	title: { type: 'string' },
	subTitle: { type: 'string' },
	preSubmitText: { type: 'string' },
	postSubmitText: { type: 'string' },
	preSubmitCaption: { type: 'string' },
	postSubmitCaption: { type: 'string' },
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
				inputType: {
					type: 'string',
					enum: [
						'text', 'password', 'email', 'number',
						'subForm',
					],
				},
				label: { type: 'string' },
				// copy of fields
				subFormFields: {
					type: 'array',
				},
			},
		},
	},
}

export const formModuleSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				...formModuleCommon,
				submits: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							action: { type: 'function' },
							onSuccess: { type: 'function' },
							label: { type: 'string' },
						},
					},
				},
				backButton: {
					type: 'object',
					properties: {
						label: { type: 'string' },
						routeId: { type: 'string' },
					},
				},
			},
		},
	},
}
export const formModuleLenses = lensesFromSchema(formModuleSchema)

export const stepFormModuleSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				forms: {
					type: 'array',
					items: {
						type: 'object',
						properties: formModuleCommon,
					},
				},
				submits: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							action: { type: 'function' },
							onSuccess: { type: 'function' },
							label: { type: 'string' },
						},
					},
				},
			},
		},
	},
}
export const stepFormModuleLenses = lensesFromSchema(stepFormModuleSchema)

// action payload lenses
export const viewPayloadFormHash = view(lensProp('formHash'))

export const viewPayloadInputId = view(lensProp('inputId'))
export const viewPayloadInputValue = view(lensProp('inputValue'))

export const viewPayloadErrorObj = view(lensProp('errorObj'))
