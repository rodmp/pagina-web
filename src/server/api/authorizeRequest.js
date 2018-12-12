import { not, equals, contains, and, propOr, prop } from 'ramda'
import { authorizationError } from 'sls-aws/src/server/api/errors'
import { userPk } from 'sls-aws/src/server/api/pkMaker'
import getCognitoUser from 'sls-aws/src/server/api/getCognitoUser'
import { authenticated } from 'sls-aws/src/constants/authenticationTypes'
import { getAuthentication } from 'sls-aws/src/server/api/getEndpointDesc'

export const authorizeRequestHof = (
	getAuthenticationFn, getCognitoUserFn,
) => async (endpointId, authentication) => {
	let userId
	const authenticationRequired = getAuthenticationFn(endpointId)
	if (authenticationRequired) {
		const { error, cognitoUser } = await getCognitoUserFn(authentication)
		if (error) {
			throw authorizationError(error)
		}
		const cognitoGroups = propOr([], 'cognito:groups', cognitoUser)
		const invalidAuthentication = and(
			not(equals(authenticationRequired, authenticated)),
			not(contains(authenticationRequired, cognitoGroups)),
		)
		if (invalidAuthentication) {
			throw authorizationError('Must be admin user')
		}
		userId = userPk(prop('sub', cognitoUser))
	}
	return userId
}

export default authorizeRequestHof(getAuthentication, getCognitoUser)
