import React, { memo, Fragment, useState } from 'react'

import { ternary } from 'sls-aws/src/util/ramdaPlus'
import {
	navigationColor,
} from 'sls-aws/src/client-web/commonStyles'

import navigationDesktopConnector from 'sls-aws/src/client-logic/app/connectors/navigationDesktopConnector'
import NavMenu from 'sls-aws/src/client-web/base/NavMenu'

import Link from 'sls-aws/src/client-web/base/Link'

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
	desktopNavigation,
}) => (
	<div className="flex layout-row layout-align-end">
		{desktopNavigation.map(({ label, routeId, menuItems }) => ternary(
			menuItems,
			<NavMenu key={label} menuLabel={label} menuItems={menuItems} />,
			<Link navStyle key={label} routeId={routeId}>{label}</Link>,
		))}
	</div>
))

export default navigationDesktopConnector(NavigationUnconnected, styles)
