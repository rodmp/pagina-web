import React, { memo } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'

import SubHeader from 'root/src/client/web/typography/SubHeader'
import Button from 'root/src/client/web/base/Button'

export const DeletePaymentModal = memo(({
	open, closeModal, children, classes, modalRecordId, deletePaymentMethod,
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

		<DialogContent
			className={classes.modalBody}
		>
			<SubHeader additionalClass={classes.modalHeader}>Remove Credit Card</SubHeader>
				Are you sure you want to delete this credit card?
				It will be deleted from your account
   </DialogContent>
		<Button
			additionalClass={classes.modalButton}
			buttonType="primarySquareButton"
			onClick={async () => {
				await deletePaymentMethod(modalRecordId)
				closeModal()
			}}
		>Confirm
		</Button>
	</Dialog>
))

export default DeletePaymentModal
