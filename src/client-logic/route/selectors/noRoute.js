import { isNil, isEmpty, or } from 'ramda'

import { routeStoreLenses } from 'sls-aws/src/client-logic/route/lenses'

const { pathSatisfiesHistory } = routeStoreLenses

export default (state, props) => {
	console.log(state, props, pathSatisfiesHistory(or(isNil, isEmpty))(state, props))
	return pathSatisfiesHistory(or(isNil, isEmpty))(state, props)
}
