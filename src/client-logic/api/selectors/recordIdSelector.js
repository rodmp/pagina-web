import getRecordSelector from 'sls-aws/src/client-logic/api/selectors/getRecordSelector'
import { idProp } from 'sls-aws/src/client-logic/api/lenses'

export default (state, props) => idProp(getRecordSelector(state, props))
