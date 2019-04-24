import {
	PLEDGE_SUCCESS_PAGE_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'
import bannerFooterImage from 'root/src/client/assets/pledge-success.jpg'

export default {
	[PLEDGE_SUCCESS_PAGE_MODULE_ID]: {
		moduleType: 'static',
		staticPageType: 'successPage',
		pageContent: {
			title: 'Success!',
			paragraphs: [
				`Thank you for your contribution!
				We'll email you when the video is live.`,
				`Remember this is just a pledge and you’ll only be charged if the streamer delivers.
				If they don’t deliver, you won’t pay a thing!`,
			],
			link: ACTIVE_PROJECTS_ROUTE_ID,
			linkLabel: 'Go to Marketplace',
			bannerFooterImage,
		},
	},
}
