import currentRouteId from 'root/src/client/logic/route/selectors/currentRouteId'

import {
	moduleIdProp, moduleIndexProp,
} from 'root/src/client/logic/route/lenses'

export default (state, props) => (
	`${currentRouteId(state, props)}-${moduleIdProp(props)}-${moduleIndexProp(props)}`
)
