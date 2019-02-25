import nextStep from 'root/src/client/logic/form/actions/nextStep'

export default formData => async (dispatch) => {
	return dispatch(nextStep(formData))
}
