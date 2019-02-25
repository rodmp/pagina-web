import React, { memo } from 'react'
import classNames from 'classnames'

import {
	navigationColor,
} from 'root/src/client/web/commonStyles'
import {
	ACTIVE_PROJECTS_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

import MaxWidthContainer from 'root/src/client/web/base/MaxWidthContainer'
import NavigationLinks from 'root/src/client/web/base/NavigationLinks'

import Link from 'root/src/client/web/base/Link'

import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		color: 'white',
		backgroundColor: navigationColor,
		height: 75,
		zIndex: 1
	},
	logo: {
		fontSize: 25,
		fontFamily: 'Impact',
	},
	navContainer: {
		margin: 0
	}
}

export const NavigationUnstyled = memo(({ classes }) => (
	<div
		className={classNames(
			'layout-row layout-align-center-stretch',
			classes.root,
		)}
	>
		<MaxWidthContainer isNavigation={true}>
			<Link navStyle routeId={ACTIVE_PROJECTS_ROUTE_ID}>
				<div
					className={classNames(
						'layout-column layout-align-center',
						classes.logo,
					)}
				>
					Double Dog
				</div>
			</Link>

			<NavigationLinks />
		</MaxWidthContainer>
	</div>
))

export default withStyles(styles)(NavigationUnstyled)
