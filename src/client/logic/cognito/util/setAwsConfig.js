import { config, CognitoIdentityCredentials, CognitoIdentity } from 'aws-sdk'
import { region } from 'root/src/shared/constants/aws'
import { identityPoolId, userPoolId } from 'root/cfOutput'

const cognitoLoginKey = `cognito-idp.${region}.amazonaws.com/${userPoolId}`

const cognitoidentity = new CognitoIdentity({ region })

const IdentityPoolIdParams = {
	IdentityPoolId: identityPoolId,
}

export default session => new Promise((resolve, reject) => {
	cognitoidentity.getId(IdentityPoolIdParams, (err, data) => {
		if (err) {
			console.warn(err)
			reject()
		}
		const creds = new CognitoIdentityCredentials({
			...IdentityPoolIdParams,
			IdentityId: data.IdentityId,
		})
		config.update({
			region,
			credentials: creds,
		})
		creds.params.Logins = {}
		if (session) {
			creds.params.Logins = {
				[cognitoLoginKey]: session.getIdToken().getJwtToken(),
			}
		}
		creds.expired = true
		resolve(session)
	})
})
