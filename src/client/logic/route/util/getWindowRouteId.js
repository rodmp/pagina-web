import getPathFromUrl from 'root/src/client/logic/route/util/getPathFromUrl'
import matchPath from 'root/src/client/logic/route/util/matchPath'
import { prop } from 'ramda'

export default () => prop('routeId', matchPath(getPathFromUrl()))
