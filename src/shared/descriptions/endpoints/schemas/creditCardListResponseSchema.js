
export default {
	type: 'object',
	properties: {
		status: {
			type: 'string',
		},
		list: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: { type: 'string' },
					object: { type: 'string' },
					address_city: { type: 'string' },
					address_country: { type: 'string' },
					address_line1: { type: 'string' },
					address_line2: { type: 'string' },
					address_State: { type: 'string' },
					address_zip: { type: 'string' },
					address_zip_check: { type: 'string' },
					brand: { type: 'string' },
					country: { type: 'string' },
					customer: { type: 'string' },
					cvc_check: { type: 'string' },
					dynamic_last4: { type: 'string' },
					exp_month: { type: 'integer' },
					exp_year: { type: 'integer' },
					fingerprint: { type: 'string' },
					funding: { type: 'string' },
					last4: { type: 'string' },
					name: { type: 'string' },
				},
			},
		},
	},
}
