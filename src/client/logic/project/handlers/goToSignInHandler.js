import {
	LOGIN_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default pushRoute => () => (
	pushRoute(LOGIN_ROUTE_ID)
)
