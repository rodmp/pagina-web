import {
	USER_POOL,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[USER_POOL]: {
		Type: 'AWS::Cognito::UserPool',
		Properties: {
			// AliasAttributes: ['email'],
			UsernameAttributes: ['email'],
			// This poorly named key means 'require verification for emails'
			AutoVerifiedAttributes: ['email'],
			EmailVerificationSubject: 'Your verification code',
			EmailVerificationMessage: 'Your verification code is {####}.',
			UserPoolName: USER_POOL,
		}
	}
}

