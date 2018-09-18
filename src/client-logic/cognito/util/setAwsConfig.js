import { config, CognitoIdentityCredentials } from 'aws-sdk'
import { region } from 'sls-aws/src/constants/aws'
import { identityPoolId, userPoolId } from 'sls-aws/cfOutput'

const cognitoLoginKey = `cognito-idp.${region}.amazonaws.com/${userPoolId}`

config.region = region
config.credentials = new CognitoIdentityCredentials({
	IdentityPoolId: identityPoolId,
})

export default (session) => {
	config.credentials = new CognitoIdentityCredentials({
		IdentityPoolId: identityPoolId,
		Logins: {
			[cognitoLoginKey]: session.getIdToken().getJwtToken(),
		},
	})
}
