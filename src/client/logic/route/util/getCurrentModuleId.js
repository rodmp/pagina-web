import routeDescriptionsObj from 'root/src/shared/descriptions/routes'
import getWindowRouteId from 'root/src/client/logic/route/util/getWindowRouteId'
import { last, prop } from 'ramda'

export default () => last(prop('modules', routeDescriptionsObj[getWindowRouteId()]))
