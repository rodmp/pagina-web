import React from 'react'
import reduxConnector from 'sls-aws/src/util/reduxConnector'

import currentRouteModuleTypes from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleTypes'

const RenderModules = ({ moduleTypes }) => (
	moduleTypes.map(([moduleId, moduleType]) => {
		switch (moduleType) {
			default:
				return (
					<div
						key={moduleId}
						className="flex layout-column layout-align-center-center"
					>
						<p>moduleId: {moduleId}</p>
						<p>moduleType: {moduleType}</p>
					</div>
				)
		}
	})
)

const RouteRender = ({ currentRouteModuleTypes }) => (
	<div>
		{/* <div className={this.props.classes.fullWidth}> */}
		{/* <div>{this.props.currentRoutePageTitle}</div> */}
		<div className="layout-column layout-align-center-stretch">
			<RenderModules moduleTypes={currentRouteModuleTypes} />
		</div>
	</div>
)

export { RouteRender }
export default reduxConnector(
	RouteRender,
	[['currentRouteModuleTypes', currentRouteModuleTypes]]
)
