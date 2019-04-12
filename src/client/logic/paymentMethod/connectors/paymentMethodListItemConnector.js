import reduxConnector from 'root/src/shared/util/reduxConnector'

import brandSelector from 'root/src/client/logic/paymentMethod/selectors/brandSelector'
import lastFourSelector from 'root/src/client/logic/paymentMethod/selectors/lastFourSelector'
import expMonthSelector from 'root/src/client/logic/paymentMethod/selectors/expMonthSelector'
import expYearSelector from 'root/src/client/logic/paymentMethod/selectors/expYearSelector'
import stripeCardIdSelector from 'root/src/client/logic/paymentMethod/selectors/stripeCardIdSelector'
import isDefaultSelector from 'root/src/client/logic/paymentMethod/selectors/isDefaultSelector'


export default reduxConnector(
	[
		['stripeCardId', stripeCardIdSelector],
		['lastFour', lastFourSelector],
		['brand', brandSelector],
		['expMonth', expMonthSelector],
		['expYear', expYearSelector],
		['isDefault', isDefaultSelector],
		['lastFour', lastFourSelector],
	],
)
