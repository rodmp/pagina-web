import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { call, map } from 'ramda'

import createReducer from 'sls-aws/src/util/createReducer'

const createStore = (reducerObj, sagas, initialState = {}) => {
	const reducer = createReducer(
		reducerObj,
		initialState
	)
	
	const rootSaga = function* () {
		yield all(map(call, sagas))
	}
	
	const sagaMiddleware = createSagaMiddleware()
	const store = reduxCreateStore(
		reducer,
		applyMiddleware(sagaMiddleware)
	)
	
	sagaMiddleware.run(rootSaga)

	return store
}


export default createStore
