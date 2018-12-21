
export default (
	moduleKey, fieldId, subFormIndex, removeSubFormAction,
) => () => {
	removeSubFormAction(moduleKey, fieldId, subFormIndex)
}
