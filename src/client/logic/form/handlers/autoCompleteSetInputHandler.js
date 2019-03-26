import { length, gt, last, dropLast, equals } from 'ramda'

export default (moduleKey, fieldPath, maxItems, action) => (value) => {
	console.log(value)
	let validateMaxValue = value
	if (gt(length(value), maxItems)) {
		validateMaxValue = [
			...dropLast(equals(maxItems, 1) ? 2 : maxItems, value),
			last(value),
		]
	}
	action(moduleKey, fieldPath, validateMaxValue)
}
