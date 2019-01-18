import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client/logic/cognito/util/userPool'

import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'
import determineAuth from 'sls-aws/src/client/logic/cognito/thunks/determineAuth'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'

import setAwsConfig from 'sls-aws/src/client/logic/cognito/util/setAwsConfig'

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
).then((session) => {
	setAwsConfig(session)
	return dispatch(determineAuth()).then(
		() => dispatch(pushRoute(ACTIVE_PROJECTS_ROUTE_ID)),
	)
})
