import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import JWT from 'jsonwebtoken'

import userPool from 'root/src/client/logic/cognito/util/userPool'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import authDetermined from 'root/src/client/logic/app/actions/authDetermined'
import clearAllForms from 'root/src/client/logic/form/actions/clearAllForms'
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

const ChangePasswordError = reject => (error) => {
	const { code, message } = error
	console.log(error)
	let fieldError = { password: 'Incorrect password' }
	if (code === 'UserNotFoundException') {
		fieldError = { email: message }
	}
	reject(fieldError)
}

export default ({ password, newPassword }) => dispatch => new Promise(
	(resolve, reject) => {
		let user
		const re = /^CognitoIdentityServiceProvider.*.idToken$/
		const keys = Object.keys(window.localStorage)
		const matchingKey = keys.filter(key => key.match(re))
		if (matchingKey.length > 0) {
			user = window.localStorage[matchingKey]
		}
		const { email } = JWT.decode(user)
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
				cognitoUser.changePassword(password, newPassword, (err, resp) => {
					if (err) {
						AuthenticateUserError(reject)(err)
					} else if (resp === 'SUCCESS') {
						dispatch(pushRoute(CHANGE_PASSWORD_SUCCESS_ROUTE_ID))
						dispatch(clearAllForms())
						dispatch(authDetermined(false))
						localStorage.clear()
					}
				})
			},
			onFailure: ChangePasswordError(reject),
		})
	},
)
