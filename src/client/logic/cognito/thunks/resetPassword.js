import { CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'root/src/client/logic/cognito/util/userPool'
import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import { LOGIN_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default ({ email, verificationCode, password }) => dispatch => new Promise((resolve, reject) => {
	const cognitoUser = new CognitoUser({
		Username: email,
		Pool: userPool,
	})
	cognitoUser.confirmPassword(verificationCode, password, {
		onSuccess: () => resolve(),
		onFailure: err => reject(err),
	})
})
	.then(() => dispatch(pushRoute(LOGIN_ROUTE_ID)))
	.catch(console.warn)
