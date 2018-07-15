import isAuthenticated from 'sls-aws/src/client-logic/auth/selectors/isAuthenticated'
import {
	DASHBOARD_ROUTE_ID, LOGIN_ROUTE_ID
} from 'sls-aws/src/client-logic/route/constants/routes/routeIds'

export default () => (
	isAuthenticated() ?
		{ routeId: DASHBOARD_ROUTE_ID, routeParams: {} } :
		{ routeId: LOGIN_ROUTE_ID, routeParams: {} }
)
