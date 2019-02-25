import React, { memo } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'

import SubHeader from 'sls-aws/src/client/web/typography/SubHeader'
import Button from 'sls-aws/src/client/web/base/Button'

export const DeletePaymentModal = memo(({
	open, closeModal, children, classes,
}) => (
	<Dialog
		className={classes.modal}
		open={open}
		onBackdropClick={() => closeModal()}
	>
		<CloseIcon
			className={classes.modalClose}
			onClick={() => closeModal()}
		/>

		<SubHeader additionalClass={classes.modalHeader}>Remove Credit Card</SubHeader>
		<DialogContent
			className={classes.modalBody}
		>
				Are you sure to delete this Credit Card?
				it will be deleted from your Account.
   </DialogContent>
		<Button
			additionalClass={classes.modalButton}
			buttonType="primarySquareButton"
		>Confirm
   </Button>
	</Dialog>
))

export default DeletePaymentModal
