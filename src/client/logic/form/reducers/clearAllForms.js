import { dissoc } from 'ramda'
import { CLEAR_ALL_FORMS } from 'root/src/client/logic/form/actionIds'

export const reducer = state => dissoc('form', state)

export default {
	[CLEAR_ALL_FORMS]: reducer,
}
