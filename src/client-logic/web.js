import createStore from 'sls-aws/src/util/createStore'

const store = createStore(
	{}, // reducer object
	[] // sagas
)

export default store
