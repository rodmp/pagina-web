import { view } from 'ramda'
import popRoute from 'root/src/client/logic/route/thunks/popRoute'
import { locationStateLens } from 'root/src/client/logic/route/lenses'
import {
	historyPopEvent,
} from 'root/src/client/logic/route/util/browserHistory'

export default dispatch => historyPopEvent(location => (
	dispatch(popRoute(view(locationStateLens, location)))
))
