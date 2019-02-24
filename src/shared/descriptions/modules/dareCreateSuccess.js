import {
	DARE_CREATE_SUCCESS_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import bannerFooterImage from 'root/src/client/assets/Dare-success-create.jpg'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default {
	[DARE_CREATE_SUCCESS_MODULE_ID]: {
		moduleType: 'static',
		staticPageType: 'successPage',
		pageContent: {
			title: 'Daring!',
			paragraphs: [
				`Your new dare is being reviewed. We'll email you when it's live. 
        Don't forget to tell your friends!`,
				`Remember this is just a pledge and you’ll only be charged if the streamer delivers. 
        If they don’t deliver, you won’t pay a thing!`,
			],
			link: ACTIVE_PROJECTS_ROUTE_ID,
			linkLabel: 'Go to Marketplace',
			bannerFooterImage,
		},
	},
}
