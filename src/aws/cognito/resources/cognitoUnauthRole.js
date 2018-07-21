import {
	COGNITO_UNAUTH_ROLE,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[COGNITO_UNAUTH_ROLE]: {
		Type: 'AWS::IAM::Role',
		Properties: {
			// RoleName: COGNITO_UNAUTH_ROLE,
			AssumeRolePolicyDocument: {
				Version: '2012-10-17',
				Statement: [
					{
						Effect: 'Allow',
						Principal: {
							Federated: 'cognito-identity.amazonaws.com'
						},
						Action: [
							'sts:AssumeRole'
						]
					}
				]
			},
			Policies: [
				{
					PolicyName: 'cognitounauth',
					PolicyDocument: {
						Version: '2012-10-17',
						Statement: [
							{
								Effect: 'Allow',
								Action: [
									'cognito-sync:*'
								],
								Resource: [
									'*'
								]
							}
						]
					}
				}
			]
		}
	}
}
