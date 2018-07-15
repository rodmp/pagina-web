import { view } from 'ramda'
import dispatchNewRoute from 'sls-aws/src/client-logic/route/util/dispatchNewRoute'
import { locationStateLens } from 'sls-aws/src/client-logic/route/lenses'
import {
	historyPopEvent,
} from 'sls-aws/src/client-logic/route/util/browserHistory'


export default (dispatch, getState) => historyPopEvent((location) => (
	dispatchNewRoute(dispatch, getState, view(locationStateLens, location))
))
