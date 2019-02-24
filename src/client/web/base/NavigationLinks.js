import React, { memo } from 'react'

import { ternary } from 'root/src/shared/util/ramdaPlus'

import navigationLinksConnector from 'root/src/client/logic/app/connectors/navigationLinksConnector'
import NavMenu from 'root/src/client/web/base/NavMenu'

import Link from 'root/src/client/web/base/Link'
import LabelOrIcon from 'root/src/client/web/base/LabelOrIcon'

export const NavigationUnconnected = memo(({
	navigationLinks,
}) => (
	<div className="flex layout-row layout-align-end">
		{navigationLinks.map(
			({ label, icon, routeId, menuItems }, i) => ternary(
				menuItems,
				<NavMenu
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					menuLabel={label}
					menuIcon={icon}
					menuItems={menuItems}
				/>,
				/*
					eslint-disable
					jsx-a11y/anchor-is-valid, react/no-array-index-key
				*/
				<Link navStyle key={i} routeId={routeId}>
					<LabelOrIcon label={label} icon={icon} />
				</Link>,
				/* eslint-enable */
			),
		)}
	</div>
))

export default navigationLinksConnector(NavigationUnconnected)
