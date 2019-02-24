import {
	MY_PROJECT_BANNER_HEADER_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import {
	CREATE_PROJECT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

import myprojects from 'root/src/client/assets/myprojects.jpg'

export default {
	[MY_PROJECT_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: myprojects,
		bannerImageText: 'YOUR DARES',
		textWithBg: true,
		bannerSubText: 'Select a Dare',
		link: {
			routeId: CREATE_PROJECT_ROUTE_ID,
			label: 'Create a new Dare +',
		},
		createNewDareActive: true,
	},
}
