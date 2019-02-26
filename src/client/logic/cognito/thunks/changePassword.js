import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import JWT from 'jsonwebtoken'

import userPool from 'root/src/client/logic/cognito/util/userPool'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import { CHANGE_PASSWORD_SUCCESS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

const AuthenticateUserError = reject => (error) => {
	const { code, message } = error
	console.log(error)
	let fieldError = { password: message }
	if (code === 'UserNotFoundException') {
		fieldError = { email: message }
	}
	reject(fieldError)
}

export default ({ password, password2 }) => dispatch => new Promise(
	(resolve, reject) => {
		let user
		const re = /^CognitoIdentityServiceProvider.*.idToken$/
		const keys = Object.keys(window.localStorage)
		const matchingKey = keys.filter(key => key.match(re))
		if (matchingKey.length > 0) {
			user = window.localStorage[matchingKey]
		}
		const { email } = (JWT.decode(user))
		const authenticationDetails = new AuthenticationDetails({
			Username: email,
			Password: password,
		})
		const cognitoUser = new CognitoUser({
			Pool: userPool,
			Username: email,
		})
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: () => {
				cognitoUser.changePassword(password, password2, (err, resp) => {
					if (err) {
						AuthenticateUserError(reject)
					} else if (resp === 'SUCCESS') {
						localStorage.clear()
						dispatch(pushRoute(CHANGE_PASSWORD_SUCCESS_ROUTE_ID))
					}
				})
			},
			onFailure: AuthenticateUserError(reject),
		})
	},
)
