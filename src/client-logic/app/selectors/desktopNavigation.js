import {
	ACTIVE_PROJECTS_ROUTE_ID, HOW_IT_WORKS_ROUTE_ID, LOGIN_ROUTE_ID,
	MY_PROJECTS_ROUTE_ID, PENDING_PROJECTS_ROUTE_ID, SIGN_OUT,
} from 'sls-aws/src/descriptions/routes/routeIds'

import isAuthenticated from 'sls-aws/src/client-logic/auth/selectors/isAuthenticated'
import isAdminSelector from 'sls-aws/src/client-logic/auth/selectors/isAdminSelector'

export default (state, props) => [
	{ label: 'Marketplace', routeId: ACTIVE_PROJECTS_ROUTE_ID },
	{ label: 'How It Works', routeId: HOW_IT_WORKS_ROUTE_ID },
	...(isAuthenticated(state, props)
		? [{
			label: 'USER',
			menuItems: [
				{ label: 'My Projects', routeId: MY_PROJECTS_ROUTE_ID },
				...(isAdminSelector(state, props)
					? [{
						label: 'Pending Projects',
						routeId: PENDING_PROJECTS_ROUTE_ID,
					}]
					: []
				),
				{ label: 'Sign Out', routeId: SIGN_OUT },
			],
		}]
		: [{ label: 'Sign In', routeId: LOGIN_ROUTE_ID }]
	),
]
