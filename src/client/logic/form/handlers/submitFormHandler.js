export default (submitFormFn, moduleKey, submitIndex, setWasSubmitted) => (e) => {
	e.preventDefault()
	setWasSubmitted(true)
	submitFormFn(moduleKey, submitIndex)
}
