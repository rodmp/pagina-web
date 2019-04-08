import React, { memo } from 'react'
import { ternary } from 'root/src/shared/util/ramdaPlus'

import linkHandler from 'root/src/client/logic/app/handlers/linkHandler'
import linkConnector from 'root/src/client/logic/app/connectors/linkConnector'

import styles from './style'

const Button = memo(({ classes, routeId, href, children, routeParams, pushRoute }) => (
	ternary(
		href,
		<a
			className={classes.link}
			href={href}
		>
			<button
				className={classes.button}
			>
				Twitch Oauth
			</button>
		</a>,
		<button
			type="button"
			className={classes.button}
			onClick={linkHandler(routeId, routeParams, pushRoute)}
		>{children}
		</button>,
	)

))

export default linkConnector(Button, styles)
