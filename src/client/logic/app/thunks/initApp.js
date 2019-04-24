import pushInitialRoute from 'root/src/client/logic/route/thunks/pushInitialRoute'
import determineAuth from 'root/src/client/logic/cognito/thunks/determineAuth'

export default () => dispatch => dispatch(determineAuth()).then(() => {
	dispatch(pushInitialRoute())
})
