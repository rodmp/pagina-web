import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { viewExternalsChild } = apiStoreLenses

// ATM IT'S DONE ONLY FOR TWITCH EXTERNAL DATA
export default state => viewExternalsChild('TWITCH', state)
