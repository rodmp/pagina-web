import { equals, view } from 'ramda'
import { 
	currentRouteLens,
} from 'sls-aws/src/client-logic/route/lenses'

export default (routeObj, state) => equals(
	routeObj,
	view(currentRouteLens, state)
)
