import {
	HOW_IT_WORKS_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'


export default {
	[HOW_IT_WORKS_ROUTE_ID]: {
		url: '/how-it-works',
		modules: [
			'HOW_IT_WORKS_MODULE_ID',
		],
	},
}
