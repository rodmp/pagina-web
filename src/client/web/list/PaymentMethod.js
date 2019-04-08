import React, { memo } from 'react'
import cardDateSelector from 'root/src/client/web/list/util/cardDateSelector'
import paymentMethodListItemConnector from 'root/src/client/logic/paymentMethod/connectors/paymentMethodListItemConnector'
import withModuleContext from 'root/src/client/util/withModuleContext'


import classNames from 'classnames'

import Button from 'root/src/client/web/base/Button'
import RadioButton from 'root/src/client/web/base/RadioButton'

const styles = {
	root: {
		width: '100%',
		marginBottom: 27,
		cursor: 'pointer',
	},
	cardDetails: {
	},
	button: {
		width: 'auto',
		margin: '0 10px 0 0',
	},
}

export const PaymentMethodUnconnected = memo(({
	classes, expMonth, expYear, lastFour, openModal, isDefault, onClick, recordId,
}) => (
	<div
		className={classNames('flex layout-row layout-align-space-between-center', classes.root)}
	>
		<div
			onClick={() => onClick(recordId)}
			className={classNames('flex layout-row layout-align-space-between-center')}
		>
			<RadioButton checked={isDefault} />
			<div className={classNames('flex layout-column', classes.cardDetails)}>
				<strong>********{lastFour}</strong>
				<span>Expires {cardDateSelector(expMonth, expYear)}</span>
			</div>
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
	paymentMethodListItemConnector(PaymentMethodUnconnected, styles),
)
