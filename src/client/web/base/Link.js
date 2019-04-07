import React, { memo } from 'react'

import classNames from 'classnames'
import linkConnector from 'root/src/client/logic/app/connectors/linkConnector'
import {
	linkColor, linkHoverColor, navLinkStyle,
} from 'root/src/client/web/commonStyles'

import linkHandler from 'root/src/client/logic/app/handlers/linkHandler'

const styles = {
	link: {
		textDecoration: 'none',
		color: linkColor,
		'&:visited': {
			color: linkColor,
		},
		'&:hover': {
			color: linkHoverColor,
		},
	},
	navStyle: navLinkStyle,
	navMenuStyle: {
		fontSize: 16,
		fontWeight: 500,
		textDecoration: 'none',
		color: linkColor,
		'&:visited': {
			color: linkColor,
		},
		'&:hover': {
			color: linkHoverColor,
		},
		padding: [[12, 16]],
		display: 'block',
	},
}

export const BaseLink = memo(({
	linkHref, linkTarget, pushRoute,
	routeId, routeParams, children,
	navStyle, navMenuStyle,
	classes,
}) => (
	<a
		className={classNames({
			[classes.link]: !navStyle && !navMenuStyle,
			[classes.navStyle]: navStyle,
			'layout-column layout-align-center-center': navStyle,
			[classes.navMenuStyle]: navMenuStyle,
			'flex layout-column layout-align-center': navMenuStyle,
		})}
		href={linkHref}
		target={linkTarget}
		onClick={linkHandler(routeId, routeParams, pushRoute)}
	>
		{children}
	</a>
))

export default linkConnector(BaseLink, styles)
