import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import webStore from 'sls-aws/src/client-logic/web'

import { connect } from 'react-redux'
import routes from 'sls-aws/src/client-logic/route/constants/routes'
import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'
import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'
class TempRouter extends React.Component {
	getNextRouteId = () => {
		switch (this.props.currentRouteId) {
			case 'TEST_ROUTE_1':
				return 'TEST_ROUTE_2'
			case 'TEST_ROUTE_2':
				return 'TEST_ROUTE_3'
			case 'TEST_ROUTE_3':
				return 'TEST_ROUTE_1'
			default:
				return 'TEST_ROUTE_1'
		}
	}
	handleClick = (e) => {
		e.preventDefault()
		this.props.pushRoute(this.getNextRouteId())
	}
	render = () => (
		<div>
			<div>{this.props.currentRouteId}</div>
			Go to: &nbsp;
			<a href="/blah" onClick={this.handleClick}>
				{this.getNextRouteId()}
			</a>
		</div>
	)
}

const ConnectedTempRouter = connect(
	(state, props) => ({
		currentRouteId: currentRouteId(state),
	}),
	{ pushRoute }
)(TempRouter)

render(
	<Provider store={webStore}>
		<ConnectedTempRouter />
	</Provider>,
	document.getElementById('app')
)
