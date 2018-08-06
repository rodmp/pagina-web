import React from 'react'

import routeRenderConnector from 'sls-aws/src/client-logic/route/connectors/routeRenderConnector'

import FormModule from 'sls-aws/src/client-web/form/FormModule'

export const RenderModules = ({ moduleTypes }) => (
	moduleTypes.map(([moduleId, moduleType]) => {
		switch (moduleType) {
			case 'form':
				return <FormModule key={moduleId} moduleId={moduleId} />
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

export const RouteRender = ({ currentRouteModuleTypes }) => (
	<div>
		{/* <div className={this.props.classes.fullWidth}> */}
		{/* <div>{this.props.currentRoutePageTitle}</div> */}
		<div className="layout-column layout-align-center-stretch">
			<RenderModules moduleTypes={currentRouteModuleTypes} />
		</div>
	</div>
)

export default routeRenderConnector(RouteRender)
