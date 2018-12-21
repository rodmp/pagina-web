
export default (submitFormFn, moduleKey, submitIndex) => (e) => {
	e.preventDefault()
	submitFormFn(moduleKey, submitIndex)
}
