
import { appStoreLenses } from 'sls-aws/src/client/logic/app/lenses'

const { viewJwtToken } = appStoreLenses

export default state => viewJwtToken(state)
