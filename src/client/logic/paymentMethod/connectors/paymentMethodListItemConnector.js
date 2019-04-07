import reduxConnector from 'root/src/shared/util/reduxConnector'

import cardTypeSelector from 'root/src/client/logic/paymentMethod/selectors/cardTypeSelector'
import lastFourSelector from 'root/src/client/logic/paymentMethod/selectors/lastFourSelector'
import expDateSelector from 'root/src/client/logic/paymentMethod/selectors/expDateSelector'
import zipCodeSelector from 'root/src/client/logic/paymentMethod/selectors/zipCodeSelector'


export default reduxConnector(
	[
		['lastFour', lastFourSelector],
		['cardType', cardTypeSelector],
		['expDate', expDateSelector],
		['zipCode', zipCodeSelector],
	],
)
