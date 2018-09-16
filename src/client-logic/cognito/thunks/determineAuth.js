import authDetermined from 'sls-aws/src/client-logic/app/actions/authDetermined'
import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

import { storageClear } from 'sls-aws/src/util/storage'

export const determineAuthHof = authDeterminedFn => () => dispatch => (
	new Promise((resolve, reject) => {
		const cognitoUser = userPool.getCurrentUser()
		console(cognitoUser)
		if (cognitoUser != null) {
			cognitoUser.getSession((err, session) => {
				if (err) {
					reject(err)
				} else {
					resolve(session)
				}
			})
		} else {
			reject()
		}
	}).then(
		session => dispatch(authDeterminedFn(session)),
	).catch(() => {
		storageClear()
		dispatch(authDeterminedFn(false))
	})
)

export default determineAuthHof(
	authDetermined,
)
