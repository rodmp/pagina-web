import getAtt from 'root/src/aws/util/getAtt'
import join from 'root/src/aws/util/join'

import {
	API_LAMBDA_EXECUTION_ROLE, API_DYNAMO_DB_TABLE,
} from 'root/src/aws/api/resourceIds'

export default {
	[API_LAMBDA_EXECUTION_ROLE]: {
		Type: 'AWS::IAM::Role',
		DependsOn: [
			API_DYNAMO_DB_TABLE,
		],
		Properties: {
			AssumeRolePolicyDocument: {
				Version: '2012-10-17',
				Statement: [
					{
						Effect: 'Allow',
						Principal: {
							Service: ['lambda.amazonaws.com'],
						},
						Action: ['sts:AssumeRole'],
					},
				],
			},
			Policies: [
				{
					PolicyName: 'root',
					PolicyDocument: {
						Version: '2012-10-17',
						Statement: [
							{
								Effect: 'Allow',
								Action: [
									'logs:CreateLogGroup',
									'logs:CreateLogStream',
									'logs:PutLogEvents',
									'logs:DescribeLogStreams',
								],
								Resource: [
									'arn:aws:logs:*:*:*',
								],
							},
							{
								Effect: 'Allow',
								Action: [
									'ses:SendEmail',
								],
								Resource: [
									'arn:aws:ses:*:*:*',
								],
							},
							{
								Effect: 'Allow',
								Action: [
									'cognito-idp:AdminGetUser',
								],
								Resource: [
									'arn:aws:cognito-idp:*:*:*',
								],
							},
							{
								Effect: 'Allow',
								Action: [
									'dynamodb:DescribeTable',
									'dynamodb:Query',
									'dynamodb:Scan',
									'dynamodb:GetItem',
									'dynamodb:PutItem',
									'dynamodb:UpdateItem',
									'dynamodb:DeleteItem',
									'dynamodb:BatchWriteItem',
									'dynamodb:BatchGetItem',
									'dynamodb:BatchGetItem',
								],
								// For ARN/index/x_index
								Resource: join(
									'',
									[
										getAtt(API_DYNAMO_DB_TABLE, 'Arn'),
										'*',
									],
								),
							},
						],
					},
				},
			],
		},
	},
}
