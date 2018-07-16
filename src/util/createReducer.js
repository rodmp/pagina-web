import { has } from 'ramda'
import Result from 'folktale/result'

import reportError from 'sls-aws/src/util/reportError'

const createReducer = (reducerObj, initialState) => (
	state = initialState, action
) => Result.try(
	() => {
		const { type } = action
		if (!has(type, reducerObj)) {
			throw new Error(`Action ${type} not found`)
		}
		reducerObj[action.type](state, action.payload)
	}
).mapError(reportError).getOrElse(state)

export default createReducer
