// import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		// const attributeEmail = new CognitoUserAttribute({
		// 	Name: 'email',
		// 	Value: email,
		// })
		userPool.signUp(
			email, password, [], null, (err, result) => {
				if (err) {
					console.log(err)
					reject(err)
				} else {
					console.log(result.user)
					resolve(result.user)
				}
			}
		)
	}
)
