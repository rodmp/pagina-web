import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// css
import 'react-material-layout/dist/react-material-class-layout.min.css'
import 'root/src/client/web/app.css'

import RouteRender from 'root/src/client/web/base/RouteRender'

import webStore from 'root/src/client/logic/web'

render(
	<Provider store={webStore}>
		<RouteRender />
	</Provider>,
	document.getElementById('app'),
)
