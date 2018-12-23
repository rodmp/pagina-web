import React, { memo } from 'react'

import linkConnector from 'sls-aws/src/client-logic/app/connectors/linkConnector'
import { linkColor, linkHoverColor } from 'sls-aws/src/client-web/commonStyles'

import linkHandler from 'sls-aws/src/client-logic/app/handlers/linkHandler'

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
}

export const BaseLink = memo(({
	linkHref, linkTarget, pushRoute,
	routeId, routeParams, children,
	classes,
}) => (
	<a
		className={classes.link}
		href={linkHref}
		target={linkTarget}
		onClick={linkHandler(routeId, routeParams, pushRoute)}
	>
		{children}
	</a>
))

export default linkConnector(BaseLink, styles)
