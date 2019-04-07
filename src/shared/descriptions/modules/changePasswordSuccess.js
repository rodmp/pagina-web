import {
	CHANGE_PASSWORD_SUCCESS_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import { LOGIN_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default {
	[CHANGE_PASSWORD_SUCCESS_MODULE_ID]: {
		moduleType: 'static',
		staticPageType: 'successPage',
		pageContent: {
			title: 'Change Password',
			paragraphs: [
				'Your password is changed correctly!',
			],
			link: LOGIN_ROUTE_ID,
			linkLabel: 'Sign In to go to the Marketplace.',
		},
	},
}
