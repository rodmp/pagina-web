import createStore from 'sls-aws/src/util/createStore'

// listeners
import popStateListener from 'sls-aws/src/client-logic/route/listeners/popStateListener'

const store = createStore(
	{}, // reducer object
	// [], // sagas
	[
		popStateListener,
	], // listeners
)

export default store
