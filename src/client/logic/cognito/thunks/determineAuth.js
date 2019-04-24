import authDetermined from 'root/src/client/logic/app/actions/authDetermined'
import userPool from 'root/src/client/logic/cognito/util/userPool'
import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

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
					resolve(setAwsConfig(session))
				}
			})
		} else {
			reject()
		}
	}).then(
		(session) => {
			const payload = {
				userId: session.getIdToken().payload['cognito:username'],
			}
			dispatch(apiRequest('GET_OAUTH_TOKENS', payload))
			return dispatch(authDeterminedFn(session))
		}
		,
	).catch((err) => {
		if (err) {
			reportError(err)
		}
		storageClear()
		return setAwsConfig().then(() => dispatch(authDeterminedFn(false)))
	})
)

export default determineAuthHof(
	authDetermined,
)
