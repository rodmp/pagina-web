import Result from 'folktale/result'
import reportError from 'sls-aws/src/util/reportError'

const createReducer = (reducerObj, initialState) => (
	state = initialState, action
) => Result.try(
	() => reducerObj[action.type](state, action.payload)
).mapError(reportError).getOrElse(state)

export default createReducer
