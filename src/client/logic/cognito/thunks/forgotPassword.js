import { CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client/logic/cognito/util/userPool'
import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'
import { RESET_PASSWORD_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'

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
