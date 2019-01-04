import authDetermined from 'sls-aws/src/client-logic/app/actions/authDetermined'
import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

import reportError from 'sls-aws/src/shared/util/reportError'
import { storageClear } from 'sls-aws/src/shared/util/storage'
import setAwsConfig from 'sls-aws/src/client-logic/cognito/util/setAwsConfig'

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
