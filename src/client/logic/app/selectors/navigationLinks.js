import {
	ACTIVE_PROJECTS_ROUTE_ID, HOW_IT_WORKS_ROUTE_ID, LOGIN_ROUTE_ID,
	MY_PROJECTS_ROUTE_ID, PENDING_PROJECTS_ROUTE_ID, SIGN_OUT,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import { ternary } from 'sls-aws/src/shared/util/ramdaPlus'

import isAuthenticated from 'sls-aws/src/client/logic/auth/selectors/isAuthenticated'
import isAdminSelector from 'sls-aws/src/client/logic/auth/selectors/isAdminSelector'
import showMobileNavSelector from 'sls-aws/src/client/logic/app/selectors/showMobileNavSelector'

export default (state, props) => ternary(
	showMobileNavSelector(state, props),
	// Mobile
	[{
		icon: 'menu',
		menuItems: [
			{ label: 'Marketplace', routeId: ACTIVE_PROJECTS_ROUTE_ID },
			{ label: 'How It Works', routeId: HOW_IT_WORKS_ROUTE_ID },
			...(isAuthenticated(state, props)
				? [
					{ label: 'My Projects', routeId: MY_PROJECTS_ROUTE_ID },
					...(isAdminSelector(state, props)
						? [{
							label: 'Pending Projects',
							routeId: PENDING_PROJECTS_ROUTE_ID,
						}]
						: []
					),
					{ label: 'Sign Out', routeId: SIGN_OUT },
				]
				: [{ label: 'Sign In', routeId: LOGIN_ROUTE_ID }]
			),
		],
	}],
	// Desktop
	[
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
	],
)
