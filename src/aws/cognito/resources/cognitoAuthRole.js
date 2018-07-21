import ref from 'sls-aws/src/aws/util/ref'
import {
	COGNITO_AUTH_ROLE, IDENTITY_POOL,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[COGNITO_AUTH_ROLE]: {
		Type: 'AWS::IAM::Role',
		DependsOn: [
			IDENTITY_POOL,
		],
		Properties: {
			// RoleName: COGNITO_AUTH_ROLE,
			AssumeRolePolicyDocument: {
				Version: '2012-10-17',
				Statement: [
					{
						Sid: '',
						Effect: 'Allow',
						Principal: {
							Federated: 'cognito-identity.amazonaws.com'
						},
						Action: 'sts:AssumeRoleWithWebIdentity',
						Condition: {
							StringEquals: {
								'cognito-identity.amazonaws.com:aud': ref(
									IDENTITY_POOL
								)
							},
							// 'ForAnyValue:StringLike': {
							// 	'cognito-identity.amazonaws.com:amr': 'unauthenticated'
							// }
						}
					}
				]
			},
			Policies: [
				{
					PolicyName: 'cognitoauth',
					PolicyDocument: {
						Version: '2012-10-17',
						Statement: [
							{
								Effect: 'Allow',
								Action: [
									'cognito-sync:*',
									'execute-api:*'
								],
								Resource: [
									'*'
								]
							},
						]
					}
				}
			]
		}
	}
}
