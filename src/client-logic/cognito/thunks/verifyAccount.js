import { CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'
import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'
import { LOGIN_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default ({ email, verificationCode }) => dispatch => new Promise(
	(resolve, reject) => {
		const cognitoUser = new CognitoUser({
			Username: email,
			Pool: userPool,
		})
		cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
			if (err) {
				reject(err)
			} else {
				resolve(result)
			}
		})
	}
).then(
	() => dispatch(pushRoute(LOGIN_ROUTE_ID))
).catch(
	console.warn
)
