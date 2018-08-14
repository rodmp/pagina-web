import authDetermined from 'sls-aws/src/client-logic/app/actions/authDetermined'
import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

export const determineAuthHof = authDeterminedFn => () => (dispatch) => {
	const cognitoUser = userPool.getCurrentUser()
	if (cognitoUser != null) {
		cognitoUser.getSession((err, session) => {
			if (err) {
				dispatch(authDeterminedFn(false))
			}
			dispatch(authDeterminedFn(session))
		})
	}
	dispatch(authDeterminedFn(false))
	return Promise.resolve()
}

export default determineAuthHof(
	authDetermined
)
