import pushInitialRoute from 'sls-aws/src/client/logic/route/thunks/pushInitialRoute'
import determineAuth from 'sls-aws/src/client/logic/cognito/thunks/determineAuth'

export default () => dispatch => dispatch(determineAuth()).then(() => {
	dispatch(pushInitialRoute())
})
