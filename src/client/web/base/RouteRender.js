import React from 'react'
import classNames from 'classnames'

import { ternary } from 'sls-aws/src/shared/util/ramdaPlus'

import routeRenderConnector from 'sls-aws/src/client/logic/route/connectors/routeRenderConnector'

import FormModule from 'sls-aws/src/client/web/form/FormModule'
import ListModule from 'sls-aws/src/client/web/list/ListModule'
import RecordModule from 'sls-aws/src/client/web/record/RecordModule'
import StaticModule from 'sls-aws/src/client/web/static/StaticModule'
import Navigation from 'sls-aws/src/client/web/base/Navigation'
import Footer from 'sls-aws/src/client/web/base/Footer'
import BannerHeader from 'sls-aws/src/client/web/header/BannerHeader'

import { ModuleContextProvider } from 'sls-aws/src/client/util/withModuleContext'

const styles = {
	content: {
		WebkitFlex: [[1, 0, 'auto']],
		flex: [[1, 0, 'auto']],
	},
}

export const RenderModules = ({ moduleTypes }) => (
	moduleTypes.map(([moduleId, moduleType, moduleIndex]) => {
		const moduleProps = {
			key: moduleId,
			value: { moduleId, moduleIndex },
		}
		switch (moduleType) {
			case 'form':
				return (
					<ModuleContextProvider {...moduleProps}>
						<FormModule />
					</ModuleContextProvider>
				)
			case 'list':
				return (
					<ModuleContextProvider {...moduleProps}>
						<ListModule />
					</ModuleContextProvider>
				)
			case 'record':
				return (
					<ModuleContextProvider {...moduleProps}>
						<RecordModule />
					</ModuleContextProvider>
				)
			case 'static':
				return (
					<ModuleContextProvider {...moduleProps}>
						<StaticModule />
					</ModuleContextProvider>
				)
			case 'bannerHeader':
				return (
					<ModuleContextProvider {...moduleProps}>
						<BannerHeader />
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
			'layout-column',
		)}
	>
		<Navigation />
		<div className="flex layout-column layout-align-start-stretch">
			<RenderModules moduleTypes={currentRouteModuleTypes} />
		</div>
		<Footer />
	</div>,
)

export default routeRenderConnector(RouteRender, styles)
