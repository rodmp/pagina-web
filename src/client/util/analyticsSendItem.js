import analyticsSerializer from 'root/src/client/util/analyticsSerializer'
import { googleAnalytics } from 'root/src/client/logic/analytics/thunks/googleAnalytics'

export default (body, option) => {
	googleAnalytics.plugin.execute('ecommerce', 'addItem', analyticsSerializer(body, option))
	googleAnalytics.plugin.execute('ecommerce', 'send')
	googleAnalytics.plugin.execute('ecommerce', 'clear')
}
