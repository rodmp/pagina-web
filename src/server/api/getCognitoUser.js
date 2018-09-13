import { path } from 'ramda'
import { CognitoIdentity } from 'aws-sdk'

export default (context) => {
	const identityId = path(['identity', 'cognitoIdentityId'], context)
	const cognitoidentity = new CognitoIdentity()
	return cognitoidentity.getUser({
		IdentityId: identityId,
	}).promise()
}
