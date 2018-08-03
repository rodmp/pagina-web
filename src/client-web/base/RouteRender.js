import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import {
	currentRouteModuleTypesSelector, currentRoutePageTitleSelector
} from 'ff/src/logic/route/selectors'


class RouteRender extends PureComponent {
	get renderModules() {
		return this.props.currentRouteModuleTypes.map((module) => {
			const moduleId = module.get('moduleId')
			switch (module.get('type')) {
				case 'form':
					return <Form key={moduleId} moduleId={moduleId} />
				case 'links':
					return <Links key={moduleId} moduleId={moduleId} />
				case 'mediaUploadForm':
					return <MediaUploadForm key={moduleId} moduleId={moduleId} />
				default:
					return (
						<div
							key={moduleId}
							className="flex layout-column layout-align-center-center"
						>
							{moduleId}: {module.get('type')}
						</div>
					)
			}
		})
	}

	render = () => (
		<div className={this.props.classes.fullWidth}>
			<div>{this.props.currentRoutePageTitle}</div>
			<div className="layout-column layout-align-center-stretch">
				{this.renderModules}
			</div>
		</div>
	)
}

RouteRender.propTypes = {
	currentRouteModuleTypes: PropTypes.instanceOf(List).isRequired,
	currentRoutePageTitle: PropTypes.string.isRequired,
	classes: classesPropType.isRequired,
}

export { RouteRender }
export default connect(
	(state, props) => ({
		currentRouteModuleTypes: currentRouteModuleTypesSelector(state, props),
		currentRoutePageTitle: currentRoutePageTitleSelector(state, props),
	}),
	// { __ACTION__ }
)(withStyles(styles)(RouteRender))
