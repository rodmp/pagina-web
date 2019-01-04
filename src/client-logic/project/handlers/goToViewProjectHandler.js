import {
	VIEW_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default (recordId, pushRoute) => () => (
	pushRoute(VIEW_PROJECT_ROUTE_ID, { recordId })
)
