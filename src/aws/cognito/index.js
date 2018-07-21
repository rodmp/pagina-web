import cognitoAuthRole from 'sls-aws/src/aws/cognito/resources/cognitoAuthRole'
import cognitoUnauthRole from 'sls-aws/src/aws/cognito/resources/cognitoUnauthRole'
import identityPool from 'sls-aws/src/aws/cognito/resources/identityPool'
import identityPoolRoleAttachment from 'sls-aws/src/aws/cognito/resources/identityPoolRoleAttachment'
import userPool from 'sls-aws/src/aws/cognito/resources/userPool'
import userPoolClient from 'sls-aws/src/aws/cognito/resources/userPoolClient'

import outputs from 'sls-aws/src/aws/cognito/outputs'

export const cognitoResources = {
	...cognitoAuthRole,
	...cognitoUnauthRole,
	...identityPool,
	...identityPoolRoleAttachment,
	...userPool,
	...userPoolClient,
}

export const cognitoOutputs = outputs
