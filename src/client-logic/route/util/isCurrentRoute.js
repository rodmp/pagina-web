import { equals, head } from 'ramda'
import {
	routeStoreLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { viewHistory } = routeStoreLenses

export default (routeObj, state) => equals(
	routeObj,
	head(viewHistory(state)),
)
