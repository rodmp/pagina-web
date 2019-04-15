import {
	DELIVER_DARE_SUCCESS_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import { ACTIVE_PROJECTS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'
import bannerFooterImage from 'root/src/client/assets/Upload-Video-Success-page.jpg'

export default {
	[DELIVER_DARE_SUCCESS_MODULE_ID]: {
		moduleType: 'static',
		staticPageType: 'successPage',
		pageContent: {
			title: 'Delivered!',
			paragraphs: [
				`We'll verify  your video based on the dare description. Once it's verified we'll let your backers know, charge them & pay you! If there are any issues verifying, we'll let you know. 
				This usually takes less than 48 hours.`,
			],
			link: ACTIVE_PROJECTS_ROUTE_ID,
			linkLabel: 'Go to Marketplace',
			bannerFooterImage,
		},
	},
}
