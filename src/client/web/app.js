import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// css
import 'react-material-layout/dist/react-material-class-layout.min.css'
import 'sls-aws/src/client/web/app.css'

import RouteRender from 'sls-aws/src/client/web/base/RouteRender'

import webStore from 'sls-aws/src/client/logic/web'

render(
	<Provider store={webStore}>
		<RouteRender />
	</Provider>,
	document.getElementById('app')
)
