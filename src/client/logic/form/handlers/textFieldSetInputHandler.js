import {
	cardNumberValidation,
	securityCodeValidation,
	expirationDateValidation,
	zipCodeValidation,
} from 'root/src/client/logic/form/util/creditCardValidations'

export default (moduleKey, fieldPath, action, fieldType) => (e) => {
	e.preventDefault()
	let { value } = e.target
	if (fieldType === 'number') {
		const re = /\D/
		const input = value[value.length - 1]
		if (input !== undefined && input.match(re)) {
			value = value.slice(0, value.length - 1)
		}
		value = parseInt(value, 10)
		if (value > 999999) value = 999999
	}
	if (fieldPath[0] === 'cardNumber') {
		value = cardNumberValidation(value)
	}
	if (fieldPath[0] === 'securityCode') {
		value = securityCodeValidation(value)
	}
	if (fieldPath[0] === 'expirationDate') {
		value = expirationDateValidation(value)
	}
	if (fieldPath[0] === 'zipCode') {
		value = zipCodeValidation(value)
	}
	action(moduleKey, fieldPath, value)
}
