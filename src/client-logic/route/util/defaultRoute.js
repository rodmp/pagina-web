import isAuthenticated from 'sls-aws/src/client-logic/auth/selectors/isAuthenticated'
import {
	DASHBOARD_ROUTE_ID, SIGN_UP_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

export default state => (
	isAuthenticated(state) ?
		{ routeId: DASHBOARD_ROUTE_ID, routeParams: {} } :
		{ routeId: SIGN_UP_ROUTE_ID, routeParams: {} }
)
