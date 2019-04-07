import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'root/src/client/logic/cognito/util/userPool'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import determineAuth from 'root/src/client/logic/cognito/thunks/determineAuth'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

import setAwsConfig from 'root/src/client/logic/cognito/util/setAwsConfig'

const AuthenticateUserError = reject => (error) => {
	const { code, message } = error
	let fieldError = { password: message }
	if (code === 'UserNotFoundException') {
		fieldError = { email: message }
	}
	reject(fieldError)
}

export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		const authenticationDetails = new AuthenticationDetails({
			Username: email,
			Password: password,
		})
		const cognitoUser = new CognitoUser({
			Username: email,
			Pool: userPool,
		})
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: resolve,
			onFailure: AuthenticateUserError(reject),
		})
	},
).then(session => setAwsConfig(session).then(
	() => dispatch(determineAuth()).then(
		() => dispatch(pushRoute(ACTIVE_PROJECTS_ROUTE_ID)),
	),
))
