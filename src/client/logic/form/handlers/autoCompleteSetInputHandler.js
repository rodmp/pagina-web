import { length, gt } from 'ramda'

export default (moduleKey, fieldPath, maxItems, action) => (value) => {
	const validateMaxValue = [...value]
	action(moduleKey, fieldPath, validateMaxValue)
	if (gt(length(value), maxItems)) {
		validateMaxValue.pop()
	}
}
