import authDetermined from 'root/src/client/logic/app/actions/authDetermined'
import userPool from 'root/src/client/logic/cognito/util/userPool'

import reportError from 'root/src/shared/util/reportError'
import { storageClear } from 'root/src/shared/util/storage'
import setAwsConfig from 'root/src/client/logic/cognito/util/setAwsConfig'

export const determineAuthHof = authDeterminedFn => () => dispatch => (
	new Promise((resolve, reject) => {
		const cognitoUser = userPool.getCurrentUser()
		if (cognitoUser != null) {
			cognitoUser.getSession((err, session) => {
				if (err) {
					reject(err)
				} else {
					setAwsConfig(session)
					resolve(session)
				}
			})
		} else {
			reject()
		}
	}).then(
		session => dispatch(authDeterminedFn(session)),
	).catch((err) => {
		if (err) {
			reportError(err)
		}
		storageClear()
		dispatch(authDeterminedFn(false))
	})
)

export default determineAuthHof(
	authDetermined,
)
