import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { forEach } from 'ramda'

import createReducer from 'sls-aws/src/util/createReducer'

const createStore = (
	reducerObj, /* sagas, */ listeners, initialState = {}, initialThunks,
) => {
	const reducer = createReducer(
		reducerObj,
		initialState,
	)
	// const rootSaga = function* () {
	// 	yield all(map(call, sagas))
	// }

	// const sagaMiddleware = createSagaMiddleware()
	const store = reduxCreateStore(
		reducer,
		composeWithDevTools(
			applyMiddleware(thunk),
		),
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		// applyMiddleware(sagaMiddleware)
	)

	const { dispatch, getState } = store

	// listeners
	forEach(
		listener => listener(dispatch, getState),
		listeners,
	)

	forEach(
		initialThunk => dispatch(initialThunk()),
		initialThunks,
	)

	return store
}


export default createStore
