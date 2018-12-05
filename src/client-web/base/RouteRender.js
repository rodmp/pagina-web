import React from 'react'

import { ternary } from 'sls-aws/src/util/ramdaPlus'

import routeRenderConnector from 'sls-aws/src/client-logic/route/connectors/routeRenderConnector'

import FormModule from 'sls-aws/src/client-web/form/FormModule'
import ViewProjectModule from 'sls-aws/src/client-web/viewProject/ViewProjectModule'


import { ModuleContextProvider } from 'sls-aws/src/util/withModuleContext'


export const RenderModules = ({ moduleTypes }) => (
	moduleTypes.map(([moduleId, moduleType, moduleIndex]) => {
		switch (moduleType) {
			case 'form':
				return (
					<ModuleContextProvider
						key={moduleId}
						value={{ moduleId, moduleIndex }}
					>
						<FormModule />
					</ModuleContextProvider>
				)
			case 'viewProject':
				return (
					<ModuleContextProvider
						key={moduleId}
						value={{ moduleId, moduleIndex }}
					>
						<ViewProjectModule />
					</ModuleContextProvider>
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
	</div>,
)

export default routeRenderConnector(RouteRender)
