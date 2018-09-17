import { config, CognitoIdentityCredentials } from 'aws-sdk'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'
import determineAuth from 'sls-aws/src/client-logic/cognito/thunks/determineAuth'
import { DASHBOARD_ROUTE_ID } from 'sls-aws/src/descriptions/routes/routeIds'

import invokeLambda from 'sls-aws/src/util/invokeLambda'
import { apiFunctionArn, identityPoolId, userPoolId } from 'sls-aws/cfOutput'
import { region } from 'sls-aws/src/constants/aws'


export default ({ email, password }) => dispatch => new Promise(
	(resolve, reject) => {
		const authenticationDetails = new AuthenticationDetails({
			Username: email,
			Password: password,
		})
		const cognitoUser = new CognitoUser({
			Username: email,
			Pool: userPool,
		})
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: resolve,
			onFailure: reject,
		})
	},
).then(
	// () => dispatch(determineAuth()).then(
	// 	() => dispatch(pushRoute(DASHBOARD_ROUTE_ID)),
	// ),
	(session) => {
		config.region = region
		config.credentials = new CognitoIdentityCredentials({
			IdentityPoolId: identityPoolId,
			Logins: {
				[`cognito-idp.${region}.amazonaws.com/${userPoolId}`]: session.getIdToken().getJwtToken()
			},
		})
		// return config.credentials.get.then(
			return dispatch(determineAuth()).then(
				() => {
					invokeLambda(
						apiFunctionArn,
						{ endpointId: 'TEST_ENDPOINT_ID', payload: { test: 'poop' } },
					).then(console.log).catch(console.warn)
					return dispatch(pushRoute(DASHBOARD_ROUTE_ID))
				},
			)
		// )
	},
).catch(
	console.warn,
)
