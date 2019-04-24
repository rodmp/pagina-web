import { listStoreLenses } from 'root/src/client/logic/list/lenses'

const { viewCurrentPage } = listStoreLenses

export default (state, props) => viewCurrentPage(state)
