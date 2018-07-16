import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { call, map, forEach } from 'ramda'

import createReducer from 'sls-aws/src/util/createReducer'

const createStore = (reducerObj, /*sagas,*/ listeners, initialState = {}) => {
	const reducer = createReducer(
		reducerObj,
		initialState
	)
	console.log(reducer)
	// const rootSaga = function* () {
	// 	yield all(map(call, sagas))
	// }
	
	// const sagaMiddleware = createSagaMiddleware()
	const store = reduxCreateStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		// applyMiddleware(sagaMiddleware)
		applyMiddleware(thunk)
	)
	// sagaMiddleware.run(rootSaga)

	// listeners
	forEach(
		listener => listener(store.dispatch, store.getState),
		listeners
	)

	return store
}


export default createStore
