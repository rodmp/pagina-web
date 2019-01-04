import React from 'react'

import { ternary } from 'sls-aws/src/shared/util/ramdaPlus'

import routeRenderConnector from 'sls-aws/src/client-logic/route/connectors/routeRenderConnector'

import FormModule from 'sls-aws/src/client-web/form/FormModule'
import ListModule from 'sls-aws/src/client-web/list/ListModule'
import RecordModule from 'sls-aws/src/client-web/record/RecordModule'
import Navigation from 'sls-aws/src/client-web/base/Navigation'
import Footer from 'sls-aws/src/client-web/base/Footer'

import { ModuleContextProvider } from 'sls-aws/src/shared/util/withModuleContext'


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
			case 'list':
				return (
					<ModuleContextProvider
						key={moduleId}
						value={{ moduleId, moduleIndex }}
					>
						<ListModule />
					</ModuleContextProvider>
				)
			case 'record':
				return (
					<ModuleContextProvider
						key={moduleId}
						value={{ moduleId, moduleIndex }}
					>
						<RecordModule />
					</ModuleContextProvider>
				)
			default:
				return (
					<div
						key={moduleId}
						className="flex layout-column layout-align-center-center"
					>
						<p>{moduleId}</p>
						<p>moduleType: {moduleType}</p>
					</div>
				)
		}
	})
)

export const RouteRender = ({ currentRouteModuleTypes, noRoute }) => ternary(
	noRoute,
	<div>loading</div>,
	<div className="flex layout-column">
		<Navigation />
		<div className="flex layout-column layout-align-center-stretch">
			<RenderModules moduleTypes={currentRouteModuleTypes} />
		</div>
		<Footer />
	</div>,
)

export default routeRenderConnector(RouteRender)
