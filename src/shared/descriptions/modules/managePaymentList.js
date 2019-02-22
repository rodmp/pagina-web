import { GET_PAYMENT_METHODS } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import { MANAGE_PAYMENT_LIST_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'
import { paymentMethod } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'
import { ACCOUNT_SETTINGS_ROUTE_ID, MANAGE_PAYMENT_FORM_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'
import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'


export default {
	[MANAGE_PAYMENT_LIST_MODULE_ID]: {
		moduleType: 'list',
		listType: 'list',
		listTitle: 'Payment Information',
		listSubtitle: 'Credit Card:',
		recordType: paymentMethod,
		endpointId: GET_PAYMENT_METHODS,
		listControls: [
			{
				title: 'Add Credit Card',
				routeId: MANAGE_PAYMENT_FORM_ROUTE_ID,
				buttonType: 'primarySquareButton',
			},
			{
				title: 'Go Back',
				routeId: ACCOUNT_SETTINGS_ROUTE_ID,
				buttonType: 'noBackgroundButton',
			},
		],
	},
}
