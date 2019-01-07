import React, { memo } from 'react'

import classNames from 'classnames'

import {
	navigationColor,
} from 'sls-aws/src/client/web/commonStyles'

import footerConnector from 'sls-aws/src/client/logic/app/connectors/footerConnector'
import MaxWidthContainer from 'sls-aws/src/client/web/base/MaxWidthContainer'

const styles = {
	root: {
		color: 'white',
		backgroundColor: navigationColor,
		height: 75,
	},
}

export const NavigationUnstyled = memo(({
	classes, currentYear,
}) => (
	<div
		className={classNames(
			'layout-row layout-align-center-center',
			classes.root,
		)}
	>
		<MaxWidthContainer>
			<div className="flex layout-row layout-align-end-center">
				Double Dog 	&copy; {currentYear}
			</div>
		</MaxWidthContainer>
	</div>
))

export default footerConnector(NavigationUnstyled, styles)
