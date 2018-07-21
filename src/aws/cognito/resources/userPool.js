import {
	USER_POOL,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[USER_POOL]: {
		Type: 'AWS::Cognito::UserPool',
		Properties: {
			AliasAttributes: [
				'email'
			],
			EmailVerificationSubject: 'Your verification code',
			EmailVerificationMessage: 'Your verification code is {####}.',
			UserPoolName: USER_POOL,
		}
	}
}

