import createStore from 'sls-aws/src/util/createStore'

// listeners
import popStateListener from 'sls-aws/src/route/client-logic/route/listeners'

const store = createStore(
	{}, // reducer object
	[], // sagas
	[
		popStateListener,
	], // listeners
)

export default store
