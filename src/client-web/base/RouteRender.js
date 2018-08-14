import React from 'react'

import { ternary } from 'sls-aws/src/util/ramdaPlus'

import routeRenderConnector from 'sls-aws/src/client-logic/route/connectors/routeRenderConnector'

import FormModule from 'sls-aws/src/client-web/form/FormModule'

export const RenderModules = ({ moduleTypes }) => (
	moduleTypes.map(([moduleId, moduleType, moduleIndex]) => {
		switch (moduleType) {
			case 'form':
				return (
					<FormModule
						key={moduleId}
						moduleId={moduleId}
						moduleIndex={moduleIndex}
					/>
				)
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

export const RouteRender = ({ currentRouteModuleTypes, noRoute }) => ternary(
	noRoute,
	<div>loading</div>,
	<div>
		<div className="layout-column layout-align-center-stretch">
			<RenderModules moduleTypes={currentRouteModuleTypes} />
		</div>
	</div>
)

export default routeRenderConnector(RouteRender)
