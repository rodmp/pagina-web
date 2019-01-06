import React from 'react'
import classNames from 'classnames'
import { ternary } from 'sls-aws/src/util/ramdaPlus'

import routeRenderConnector from 'sls-aws/src/client-logic/route/connectors/routeRenderConnector'

import FormModule from 'sls-aws/src/client-web/form/FormModule'
import ListModule from 'sls-aws/src/client-web/list/ListModule'
import RecordModule from 'sls-aws/src/client-web/record/RecordModule'
import Navigation from 'sls-aws/src/client-web/base/Navigation'
import Footer from 'sls-aws/src/client-web/base/Footer'

import { ModuleContextProvider } from 'sls-aws/src/util/withModuleContext'

const styles = {
	content: {
		WebkitFlex: [[1, 0, 'auto']],
		flex: [[1, 0, 'auto']],
	},
}

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

export const RouteRender = ({
	currentRouteModuleTypes, noRoute, classes,
}) => ternary(
	noRoute,
	<div>loading</div>,
	<div
		className={classNames(
			classes.content,
			"layout-column"
		)}
	>
		<Navigation />
		<div className="flex layout-column layout-align-center-stretch">
			<RenderModules moduleTypes={currentRouteModuleTypes} />
		</div>
		<Footer />
	</div>,
)

export default routeRenderConnector(RouteRender, styles)
