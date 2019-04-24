import creditCardFormat from 'root/src/client/logic/form/util/creditCardFormat'

export const cardNumberValidation = (value) => {
	const pattern = /^\s*\d*\s*$/
	if (!value.match(pattern) && value.length < 5) {
		return value.slice(0, value.length - 1)
	}
	return creditCardFormat(value)
}

export const securityCodeValidation = (value) => {
	let pattern
	switch (value.length) {
		case 1:
			pattern = /^([0-9])$/
			break
		case 2:
			pattern = /^([0-9][0-9])$/
			break
		case 3:
			pattern = /^([0-9][0-9][0-9])$/
			break
		default:
			pattern = /^&/
	}
	if (!value.match(pattern)) {
		return value.slice(0, value.length - 1)
	}
	return value
}

export const expirationDateValidation = (value, previousValue) => {
	let pattern
	switch (value.length) {
		case 1:
			pattern = /^([0-9])$/
			break
		case 2:
			pattern = /^(0[1-9]|1[0-2])$/
			break
		case 3:
			pattern = /^(0[1-9]|1[0-2])\/$/
			break
		case 4:
			pattern = /^(0[1-9]|1[0-2])\/[1-9]$/
			break
		case 5:
			pattern = /^(0[1-9]|1[0-2])\/([1-9][0-9])$/
			break
		default:
			pattern = /^$/
	}
	if (value.length === 2) {
		return `${value}/`
	}
	if (!value.match(pattern)) {
		return value.slice(0, value.length - 1)
	}
	if (value.length === 1 && value != 0 && value != 1) {
		return `0${value}/`
	}
	if (value.length === 2) {
		if (previousValue.length === 3) {
			return value.slice(0, value.length - 1)
		}
		return `${value}/`
	}
	return value
}

export const zipCodeValidation = (value) => {
	if (value.length > 5) {
		return value.slice(0, 5)
	} return value
}
