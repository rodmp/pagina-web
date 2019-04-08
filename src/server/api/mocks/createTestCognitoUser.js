import { CognitoIdentityServiceProvider } from 'aws-sdk'
import { userPoolId } from 'root/cfOutput'

export default async (email) => {
	const provider = new CognitoIdentityServiceProvider()
	const params = {
		UserPoolId: userPoolId,
		Username: email,
		TemporaryPassword: '!1Dtemp_pswd',
		UserAttributes: [
			{
				Name: 'email',
				Value: email,
			},
			{
				Name: 'email_verified',
				Value: 'True',
			},
			/* more items */
		],
		ValidationData: [
			{
				Name: 'TEST_USER', /* required */
			},
			/* more items */
		],
	}

	const user = await provider.adminCreateUser(params).promise()
	return user
}
