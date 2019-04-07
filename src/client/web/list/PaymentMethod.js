import React, { memo } from 'react'
import cardDateSelector from 'root/src/client/web/list/util/cardDateSelector'
import cardTypeSelector from 'root/src/client/web/list/util/cardTypeSelector'
import lastFourSelector from 'root/src/client/web/list/util/lastFourSelector'
import paymentMethodListItemConnector from 'root/src/client/logic/paymentMethod/connectors/paymentMethodListItemConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'


import classNames from 'classnames'

import Button from 'root/src/client/web/base/Button'

const styles = {
	root: {
		width: '100%',
		marginBottom: 27,
	},
	cardDetails: {
	},
	button: {
		width: 'auto',
		margin: '0 10px 0 0',
	},
}

export const ListItemUnconnected = memo(({
	cardType, classes, expDate, lastFour, openModal,
}) => (
	<div className={classNames('flex layout-row layout-align-space-between-center', classes.root)}>
		<div className={classNames('flex layout-column', classes.cardDetails)}>
			<strong>{cardTypeSelector(cardType)} {lastFourSelector(lastFour)}</strong>
			<span>Expires {cardDateSelector(expDate)}</span>
		</div>
		<Button
			type="button"
			onClick={() => openModal()}
			buttonType="noBackgroundButton"
			additionalClass={classes.button}
			isStyled
			disableRipple
		>
				Remove
		</Button>
	</div>
))

export default withModuleContext(
	paymentMethodListItemConnector(ListItemUnconnected, styles),
)
