import modulesDescripotionsObj from 'root/src/shared/descriptions/modules'
import { propOr } from 'ramda'

export default moduleId => propOr(undefined, 'endpointId', modulesDescripotionsObj[moduleId])
