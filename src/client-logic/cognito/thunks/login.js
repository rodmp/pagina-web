import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

import userPool from 'sls-aws/src/client-logic/cognito/util/userPool'

import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'
import determineAuth from 'sls-aws/src/client-logic/cognito/thunks/determineAuth'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'sls-aws/src/descriptions/routes/routeIds'

import setAwsConfig from 'sls-aws/src/client-logic/cognito/util/setAwsConfig'

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
).then((session) => {
	setAwsConfig(session)
	return dispatch(determineAuth()).then(
		() => dispatch(pushRoute(ACTIVE_PROJECTS_ROUTE_ID)),
	)
}).catch(
	console.warn,
)
