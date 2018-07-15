import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import webStore from 'sls-aws/src/client-logic/web'

render(
	<Provider store={webStore}>
		<div>Hello World</div>
	</Provider>,
	document.getElementById('app')
)
