import React, { memo } from 'react'

import { ternary } from 'sls-aws/src/util/ramdaPlus'

import classNames from 'classnames'

import {
	navigationColor,
} from 'sls-aws/src/client-web/commonStyles'

import navigationConnector from 'sls-aws/src/client-logic/app/connectors/navigationConnector'

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

export const NavigationUnconnected = memo(({
	showMobileNav, classes,
}) => (
	<div
		className={classNames(
			'layout-row layout-align-center-center',
			classes.root,
		)}
	>
		<MaxWidthContainer>
			<div className={classes.logo}>Double Dog</div>
			{ternary(
				showMobileNav,
				<div>mobile</div>,
				<div>reg</div>,
			)}
		</MaxWidthContainer>
	</div>
))

export default navigationConnector(NavigationUnconnected, styles)
