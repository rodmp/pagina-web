import React, { useState, useEffect, memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import fieldInputConnector from 'root/src/client/logic/form/connectors/fieldInputConnector'
import textFieldSetInputHandler from 'root/src/client/logic/form/handlers/textFieldSetInputHandler'
import MinMaxLength from 'root/src/client/web/base/MinMaxLength'
import withModuleContext from 'root/src/client/util/withModuleContext'


const styles = {
	fieldMax: {
		marginTop: 9,
	},
	field: {
		marginBottom: 20,
		width: 'calc(100% - 10px)',
	},
	halfField: {
		width: 'calc(48.5% - 10px)',
		display: 'inline-block',
		textAlign: 'center',
		verticalAlign: 'top',
	},
	label: {
		marginBottom: 8,
		textAlign: 'left',
		display: 'block',
		fontSize: 20,
		fontWeight: 'bold',
	},
	input: {
		width: '100%',
		height: 44,
		border: 'solid 0.5px #cccccc',
		fontSize: 16,
		paddingLeft: 10,
		'&:placeholder': {
			color: '#757575',
		},
	},
	expDate: {
		marginRight: 'calc(1.5% + 5px)',
	},
	securityCode: {
		marginLeft: 'calc(1.5% + 5px)',
		'&::-webkit-inner-spin-button': {
			appearance: 'none',
			margin: 0,
		},
		'&::-webkit-outer-spin-button': {
			appearance: 'none',
			margin: 0,
		},
	},
	redText: {
		color: 'red',
	},
	error: {
		textAlign: 'left',
		fontSize: 12,
		margin: '3px 0 0 0',
	},
}

export const InputField = memo(({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError, fieldType, fieldMultiline, fieldPlaceholder, formType, classes, wasSubmitted,
}) => {
	// const [focus, setFocus] = useState()
	// const [error, setError] = useState(fieldError)
	// useEffect(() => {
	// 	setError(fieldError)
	// }, [fieldHasError])

	switch (formType) {
		case 'paymentMethod':
			return (
				<div className={
					classNames(
						'flex layout-column',
						classes.field,
						orNull((fieldId === 'expirationDate' || fieldId === 'securityCode'), classes.halfField),
						orNull((fieldId === 'expirationDate'), classes.expDate),
						orNull((fieldId === 'securityCode'), classes.securityCode),
					)}
				>
					<label className={classes.label} htmlFor={fieldId}>
						{fieldLabel}<span className={classes.redText}>*</span>:
					</label>
					<input
						id={fieldId}
						type={fieldType}
						className={classes.input}
						placeholder={fieldPlaceholder}
						onChange={textFieldSetInputHandler(
							moduleKey, fieldPath, setInput, fieldType,
						)}
						value={fieldValue}
					/>
					{orNull(fieldHasError && wasSubmitted,
						<p className={classNames(classes.error, classes.redText)}>
							{fieldError}
						</p>)}
				</div>

			)
		default:
			return (
				<TextField
					fullWidth
					id={fieldId}
					label={fieldLabel}
					type={fieldType}
					multiline={fieldMultiline}
					variant="outlined"
					value={fieldValue}
					error={fieldHasError}
					helperText={fieldError}
					placeholder={fieldPlaceholder}
					onChange={textFieldSetInputHandler(
						moduleKey, fieldPath, setInput, fieldType,
					)}
				/>
			)
	}
})

export default fieldInputConnector(withStyles(styles)(InputField))
