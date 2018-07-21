import resourcePrefix from 'sls-aws/src/aws/util/resourcePrefix'

export const COGNITO_AUTH_ROLE = `${resourcePrefix}CognitoAuthRole`
export const COGNITO_UNAUTH_ROLE = `${resourcePrefix}CognitoUnauthRole`
export const IDENTITY_POOL = `${resourcePrefix}IdentityPool`
export const IDENTITY_POOL_ROLE_ATTACHMENT = `${resourcePrefix}IdentityPoolRoleAttachment`
export const USER_POOL_CLIENT = `${resourcePrefix}UserPoolClient`
export const USER_POOL = `${resourcePrefix}UserPool`
