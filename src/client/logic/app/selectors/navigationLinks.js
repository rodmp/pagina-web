import {
	ACTIVE_PROJECTS_ROUTE_ID, HOW_IT_WORKS_ROUTE_ID, LOGIN_ROUTE_ID,
	MY_PROJECTS_ROUTE_ID, PENDING_PROJECTS_ROUTE_ID, SIGN_OUT, ACCOUNT_SETTINGS_ROUTE_ID
} from 'root/src/shared/descriptions/routes/routeIds'

import { ternary } from 'root/src/shared/util/ramdaPlus'

import isAuthenticated from 'root/src/client/logic/auth/selectors/isAuthenticated'
import isAdminSelector from 'root/src/client/logic/auth/selectors/isAdminSelector'
import showMobileNavSelector from 'root/src/client/logic/app/selectors/showMobileNavSelector'

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
					{ label: 'My Dares', routeId: MY_PROJECTS_ROUTE_ID },
					{ label: 'Account Settings', routeId: ACCOUNT_SETTINGS_ROUTE_ID },
					...(isAdminSelector(state, props)
						? [{
							label: 'Pending Dares',
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
					{ label: 'My Dares', routeId: MY_PROJECTS_ROUTE_ID },
					{ label: 'Account Settings', routeId: ACCOUNT_SETTINGS_ROUTE_ID },
					...(isAdminSelector(state, props)
						? [{
							label: 'Pending Dares',
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
