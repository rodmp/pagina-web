import { appStoreLenses } from 'root/src/client/logic/app/lenses'

const { viewAuthenticated } = appStoreLenses

export default state => Boolean(viewAuthenticated(state))
