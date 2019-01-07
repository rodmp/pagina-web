import userPool from 'sls-aws/src/client/logic/cognito/util/userPool'
import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'
import { VERIFY_ACCOUNT_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		userPool.signUp(
			email, password, [], null, (cognitoError, result) => {
				if (cognitoError) {
					const { code, message } = cognitoError
					let fieldError = { email: message }
					if (code === 'InvalidPasswordException') {
						fieldError = { password: message }
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
