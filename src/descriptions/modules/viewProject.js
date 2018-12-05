import { VIEW_PROJECT_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

const stupidFn = () => { console.log('yo') }

export default {
	[VIEW_PROJECT_MODULE_ID]: {
		moduleType: 'viewProject',
		onEnterActions: [stupidFn],
	},
}
