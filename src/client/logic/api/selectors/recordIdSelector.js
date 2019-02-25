import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'
import { idProp } from 'root/src/client/logic/api/lenses'

export default (state, props) => idProp(getRecordSelector(state, props))
