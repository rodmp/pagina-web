import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import currentRouteModuleTypesSelector from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleTypes'


class RouteRender extends PureComponent {
	get renderModules() {
		return this.props.currentRouteModuleTypes.map(([moduleId, moduleType]) => {
			switch (moduleType) {
				// case 'form':
				// 	return <Form key={moduleId} moduleId={moduleId} />
				// case 'links':
				// 	return <Links key={moduleId} moduleId={moduleId} />
				// case 'mediaUploadForm':
				// 	return <MediaUploadForm key={moduleId} moduleId={moduleId} />
				default:
					return (
						<div
							key={moduleId}
							className="flex layout-column layout-align-center-center"
						>
							{moduleId}: {moduleType}
						</div>
					)
			}
		})
	}

	render = () => (
		<div>
		{/* <div className={this.props.classes.fullWidth}> */}
			{/* <div>{this.props.currentRoutePageTitle}</div> */}
			<div className="layout-column layout-align-center-stretch">
				{this.renderModules}
			</div>
		</div>
	)
}

export { RouteRender }
export default connect(
	(state, props) => ({
		currentRouteModuleTypes: currentRouteModuleTypesSelector(state, props),
		// currentRoutePageTitle: currentRoutePageTitleSelector(state, props),
	}),
	// { __ACTION__ }
)(RouteRender)
// )(withStyles(styles)(RouteRender))
