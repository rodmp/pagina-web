import { view, lensProp } from 'ramda'
import { appStoreLenses } from 'root/src/client/logic/app/lenses'

const { viewPayload } = appStoreLenses

export default (state) => {
	const takeEmail = lensProp('email')
	return view(takeEmail, viewPayload(state))
}
