import { CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'root/src/client/logic/cognito/util/userPool'
import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import { RESET_PASSWORD_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default ({ email }) => dispatch => new Promise((resolve, reject) => {
	const cognitoUser = new CognitoUser({
		Username: email,
		Pool: userPool,
	})
	cognitoUser.forgotPassword({
		onSuccess: result => resolve(result),
		onFailure: err => reject(err),
	})
})
	.then(() => dispatch(pushRoute(RESET_PASSWORD_ROUTE_ID)))
	.catch(console.warn)
