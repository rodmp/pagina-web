import React, { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'

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
	classes, card, openModal,
}) => (
	<div className={classNames('flex layout-row layout-align-space-between-center', classes.root)}>
		<div className={classNames('flex layout-column', classes.cardDetails)}>
			<strong>{card.cardBrand} ****{card.lastFour}</strong>
			<span>{card.cardName}</span>
			<span>Expires {card.expMonth}/{card.expYear}</span>
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


export default withStyles(styles)(ListItemUnconnected)
