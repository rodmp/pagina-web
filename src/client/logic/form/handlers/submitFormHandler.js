export default (submitFormFn, moduleKey, submitIndex, setWasSubmitted) => (e) => {
	e.preventDefault()
	if (setWasSubmitted) { setWasSubmitted(true) }
	submitFormFn(moduleKey, submitIndex)
}
