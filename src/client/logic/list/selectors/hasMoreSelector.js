import { listStoreLenses } from 'root/src/client/logic/list/lenses'

const { viewHasMore } = listStoreLenses

export default (state, props) => viewHasMore(state)
