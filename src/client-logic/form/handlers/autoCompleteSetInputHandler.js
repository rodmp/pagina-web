import { length, gt, last, dropLast } from 'ramda'

export default (moduleKey, fieldPath, maxItems, action) => (value) => {
	let validateMaxValue = value
	if (gt(length(value), maxItems)) {
		validateMaxValue = [
			...dropLast(maxItems, value),
			last(value),
		]
	}
	action(moduleKey, fieldPath, validateMaxValue)
}
