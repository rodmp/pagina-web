import React from 'react'
import classNames from 'classnames'

import { ternary } from 'root/src/shared/util/ramdaPlus'

import routeRenderConnector from 'root/src/client/logic/route/connectors/routeRenderConnector'

import FormModule from 'root/src/client/web/form/FormModule'
import ListModule from 'root/src/client/web/list/ListModule'
import RecordModule from 'root/src/client/web/record/RecordModule'
import StaticModule from 'root/src/client/web/static/StaticModule'
import Navigation from 'root/src/client/web/base/Navigation'
import Footer from 'root/src/client/web/footer/Footer'
import BannerFooter from 'root/src/client/web/footer/BannerFooter'
import BannerHeader from 'root/src/client/web/header/BannerHeader'
import UserDataModule from 'root/src/client/web/userData/UserDataModule'

import { ModuleContextProvider } from 'root/src/client/util/withModuleContext'

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
			case 'bannerFooter':
				return (
					<ModuleContextProvider {...moduleProps}>
						<BannerFooter />
					</ModuleContextProvider>
				)
			case 'external':
				return (
					<ModuleContextProvider {...moduleProps}>
						<UserDataModule />
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
