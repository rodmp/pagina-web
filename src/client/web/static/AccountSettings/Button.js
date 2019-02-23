import React, { memo } from 'react'

import linkHandler from 'sls-aws/src/client/logic/app/handlers/linkHandler'
import linkConnector from 'sls-aws/src/client/logic/app/connectors/linkConnector'

import styles from './style'

const Button = memo(({ classes, routeId, children, routeParams, pushRoute }) => (
	<button
		type="button"
		className={classes.button}
		onClick={linkHandler(routeId, routeParams, pushRoute)}
	>{children}
	</button>
))

export default linkConnector(Button, styles)
