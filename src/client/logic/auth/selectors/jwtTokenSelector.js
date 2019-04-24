
import { appStoreLenses } from 'root/src/client/logic/app/lenses'

const { viewJwtToken } = appStoreLenses

export default state => viewJwtToken(state)
