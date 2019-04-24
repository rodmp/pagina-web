import { has } from 'ramda'
import Result from 'folktale/result'

import reportError from 'root/src/shared/util/reportError'

const createReducer = (reducerObj, initialState) => (
	state = initialState, action,
) => Result.try(
	() => {
		const { type, payload } = action
		if (!has(type, reducerObj)) {
			throw new Error(`Action ${type} not found`)
		}
		return reducerObj[type](state, payload)
	},
).mapError(reportError).getOrElse(state)

export default createReducer
