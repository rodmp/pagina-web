import { not, equals, contains, and, propOr, prop } from 'ramda'
import { authorizationError } from 'sls-aws/src/server/api/errors'
import { userPk } from 'sls-aws/src/server/api/pkMaker'
import getCognitoUser from 'sls-aws/src/server/api/getCognitoUser'
import { authenticated } from 'sls-aws/src/shared/constants/authenticationTypes'
import { getAuthentication } from 'sls-aws/src/server/api/getEndpointDesc'

export const authorizeRequestHof = (
	getAuthenticationFn, getCognitoUserFn,
) => async (endpointId, authentication) => {
	const authenticationRequired = getAuthenticationFn(endpointId)
	let cognito = {}
	if (authentication) {
		cognito = await getCognitoUserFn(authentication)
	}
	const { error, cognitoUser } = cognito
	if (error && authenticationRequired) {
		throw authorizationError(error)
	}
	if (authenticationRequired && not(equals(authenticationRequired, authenticated))) {
		const cognitoGroups = propOr([], 'cognito:groups', cognitoUser)
		const invalidAuthentication = not(
			contains(authenticationRequired, cognitoGroups),
		)
		if (invalidAuthentication) {
			throw authorizationError('Must be admin user')
		}
	}
	return cognitoUser && userPk(prop('sub', cognitoUser))
}

export default authorizeRequestHof(getAuthentication, getCognitoUser)
