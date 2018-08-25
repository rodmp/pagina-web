// import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'
import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'
import { VERIFY_ACCOUNT_ROUTE_ID } from 'sls-aws/src/descriptions/routes/routeIds'

export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		// const attributeEmail = new CognitoUserAttribute({
		// 	Name: 'email',
		// 	Value: email,
		// })
		userPool.signUp(
			email, password, [], null, (err, result) => {
				if (err) {
					reject(err)
				} else {
					resolve(result.user)
				}
			},
		)
	},
).then(
	() => dispatch(pushRoute(VERIFY_ACCOUNT_ROUTE_ID)),
)
