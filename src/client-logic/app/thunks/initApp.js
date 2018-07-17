import pushInitialRoute from 'sls-aws/src/client-logic/route/thunks/pushInitialRoute'

export default () => (dispatch) => {
	dispatch(pushInitialRoute())
}
