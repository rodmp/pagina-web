import {
	TWITCH_OAUTH_FAILURE_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import { ACTIVE_PROJECTS_ROUTE_ID, CONTACT_US_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'
import bannerFooterImage from 'root/src/client/assets/Oauth-failure.jpg'

export default {
	[TWITCH_OAUTH_FAILURE_MODULE_ID]: {
		moduleType: 'static',
		staticPageType: 'successPage',
		pageContent: {
			title: 'Ooops!',
			paragraphs: [
				[`Something broke! 
				Give it another shot, or `,
				'contact us',
				' for help.',
				],
			],
			link: ACTIVE_PROJECTS_ROUTE_ID,
			linkLabel: 'Go to Marketplace',
			bannerFooterImage,
			withoutSocialIcons: true,
			additionalLinks: [
				{
					linkIndex: 1,
					linkRouteId: ACTIVE_PROJECTS_ROUTE_ID,
				},
			],
		},
	},
}
