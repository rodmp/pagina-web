export default (moduleKey, fieldPath, action, fieldType) => (e) => {
	e.preventDefault()
	let { value } = e.target
	if (fieldType === 'number') {
		value = parseInt(value, 10)
	}
	action(moduleKey, fieldPath, value)
}
