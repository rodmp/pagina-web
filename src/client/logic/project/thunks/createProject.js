import nextStep from 'sls-aws/src/client/logic/form/actions/nextStep'

export default formData => async (dispatch) => {
	return dispatch(nextStep(formData))
}
