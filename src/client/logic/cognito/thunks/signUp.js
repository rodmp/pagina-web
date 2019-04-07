import userPool from 'root/src/client/logic/cognito/util/userPool'
import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import { VERIFY_ACCOUNT_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		userPool.signUp(
			email, password, [], null, (cognitoError, result) => {
				if (cognitoError) {
					const { code, message } = cognitoError
					let fieldError = { email: message }
					if (code === 'InvalidPasswordException') {
						fieldError = {
							password: 'Password must contain at least one number, symbol, and uppercase character',
						}
					}
					reject(fieldError)
				} else {
					resolve(result.user)
				}
			},
		)
	},
).then(
	() => dispatch(pushRoute(VERIFY_ACCOUNT_ROUTE_ID)),
)
