
export default (moduleKey, fieldId, addSubFormAction) => () => {
	addSubFormAction(moduleKey, fieldId)
}
