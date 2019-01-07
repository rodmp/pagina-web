import { appStoreLenses } from 'sls-aws/src/client/logic/app/lenses'

const { viewAuthenticated } = appStoreLenses

export default state => Boolean(viewAuthenticated(state))
