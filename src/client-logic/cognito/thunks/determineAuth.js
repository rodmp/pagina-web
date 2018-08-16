import authDetermined from 'sls-aws/src/client-logic/app/actions/authDetermined'
import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

import { storageClear } from 'sls-aws/src/util/storage'


const failedAuth = (dispatch, authDeterminedFn) => {
	storageClear()
	dispatch(authDeterminedFn(false))
}

export const determineAuthHof = authDeterminedFn => () => (dispatch) => {
	const cognitoUser = userPool.getCurrentUser()
	if (cognitoUser != null) {
		cognitoUser.getSession((err, session) => {
			if (err) {
				failedAuth(dispatch, authDeterminedFn)
			} else {
				dispatch(authDeterminedFn(session))
			}
		})
	} else {
		failedAuth(dispatch, authDeterminedFn)
	}
	return Promise.resolve()
}

export default determineAuthHof(
	authDetermined
)
