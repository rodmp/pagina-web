import { view } from 'ramda'
import popRoute from 'sls-aws/src/client-logic/route/thunks/popRoute'
import { locationStateLens } from 'sls-aws/src/client-logic/route/lenses'
import {
	historyPopEvent,
} from 'sls-aws/src/client-logic/route/util/browserHistory'

export default dispatch => historyPopEvent(location => (
	dispatch(popRoute(view(locationStateLens, location)))
))
