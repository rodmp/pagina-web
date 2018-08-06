import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'

import {
	moduleIdProp, moduleIndexProp,
} from 'sls-aws/src/client-logic/route/lenses'

export default (state, props) => `${currentRouteId(state, props)}-${moduleIdProp(props)}-${moduleIndexProp(props)}`
