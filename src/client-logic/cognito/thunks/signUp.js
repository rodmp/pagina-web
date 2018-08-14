import md5 from 'crypto-js/md5'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		const attributeEmail = new CognitoUserAttribute({
			Name: 'email',
			Value: email,
		})
		const fakeUn = md5(email).toString()
		userPool.signUp(
			fakeUn, password, [attributeEmail], null, (err, result) => {
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
