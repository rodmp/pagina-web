import {
	CLAIM_PROJECT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default (recordId, pushRoute) => () => (
	pushRoute(CLAIM_PROJECT_ROUTE_ID, { recordId })
)
