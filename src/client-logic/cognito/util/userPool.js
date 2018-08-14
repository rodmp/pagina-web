import { clientId, userPoolId } from 'sls-aws/slsOutput.json'

import { CognitoUserPool } from 'amazon-cognito-identity-js'

export default new CognitoUserPool({
	UserPoolId: userPoolId,
	ClientId: clientId,
})
