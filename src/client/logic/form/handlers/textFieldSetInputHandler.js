import {
	cardNumberValidation,
	securityCodeValidation,
	expirationDateValidation,
	zipCodeValidation,
} from 'root/src/client/logic/form/util/creditCardValidations'

const number = 'number'
const cardNumber = 'cardNumber'
const securityCode = 'securityCode'
const expDate = 'expDate'
const zipCode = 'zipCode'

export default (moduleKey, fieldPath, action, fieldType, setPreviousValue, previousValue) => async (e) => {
	e.preventDefault()
	let { value } = e.target
	if (fieldType === number) {
		const re = /\D/
		const input = value[value.length - 1]
		if (input !== undefined && input.match(re)) {
			value = value.slice(0, value.length - 1)
		}
		value = parseInt(value, 10)
		if (value > 999999) value = 999999
	}
	switch (fieldPath[0]) {
		case cardNumber:
			value = cardNumberValidation(value)
			break
		case securityCode:
			value = securityCodeValidation(value)
			break
		case expDate:
			value = expirationDateValidation(value, previousValue)
			break
		case zipCode:
			value = zipCodeValidation(value)
			break
		default:
	}
	action(moduleKey, fieldPath, value)
	await setPreviousValue(value.slice(0, value.length))
}
