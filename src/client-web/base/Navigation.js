import React, { memo } from 'react'

import classNames from 'classnames'

import {
	navigationColor,
} from 'sls-aws/src/client-web/commonStyles'

import { withStyles } from '@material-ui/core/styles'
import MaxWidthContainer from 'sls-aws/src/client-web/base/MaxWidthContainer'

const styles = {
	root: {
		color: 'white',
		backgroundColor: navigationColor,
		height: 75,
	},
	logo: {
		fontSize: 25,
		fontFamily: 'Impact',
	},
}

export const NavigationUnstyled = memo(({
	classes,
}) => (
	<div
		className={classNames(
			'layout-row layout-align-center-center',
			classes.root,
		)}
	>
		<MaxWidthContainer>
			<div className={classes.logo}>Double Dog</div>
		</MaxWidthContainer>
	</div>
))

export default withStyles(styles)(NavigationUnstyled)
