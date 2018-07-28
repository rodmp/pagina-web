

export const submitFormHof = (
	formSubmittingFn, validateFormFn, formDataFn, formActionFn, resetFormFn,
	formSubmitErrorFn, setFormDirtyFn, formSubmittingFinishedFn,
) => (formId, routeId) => (dispatch, getState) => {
	dispatch(formSubmittingFn())
	const state = getState()
	const formValid = validateFormFn(formId, routeId)
	let formPromise
	if (formValid) {
		const formData = formDataFn()
		const formAction = formActionFn()
		formPromise = dispatch(formAction(formData)).then((res) => {
			dispatch(resetFormFn())
		}).catch((err) => {
			dispatch(formSubmitErrorFn(err))
		})
	} else {
		dispatch(setFormDirtyFn())
		formPromise = Promise.resolve()
	}
	return formPromise.then(() => {
		dispatch(formSubmittingFinishedFn())
	})
}

export default submitFormHof(
	formSubmitting, validateForm, formData, formAction, resetForm,
	formSubmitError, setFormDirty, formSubmittingFinished,
)
