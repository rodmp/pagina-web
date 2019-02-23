import React, { memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import fieldInputConnector from 'sls-aws/src/client/logic/form/connectors/fieldInputConnector'
import textFieldSetInputHandler from 'sls-aws/src/client/logic/form/handlers/textFieldSetInputHandler'
import MinMaxLength from 'sls-aws/src/client/web/base/MinMaxLength'
import withModuleContext from 'sls-aws/src/client/util/withModuleContext'


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
		color: '#757575',
		paddingLeft: 10,
	},
	expDate: {
		marginRight: 'calc(1.5% + 5px)',
	},
	securityCode: {
		marginLeft: 'calc(1.5% + 5px)',
	},
	redText: {
		color: 'red',
	},
}

export const InputField = memo(({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError, fieldType, fieldMultiline, fieldPlaceholder, formType, classes,
}) => {
	switch (formType) {
		case 'paymentMethod':
			return (
				<div className={
					classNames(
						'flex layout-column',
						classes.field,
						orNull((fieldId === 'expDate' || fieldId === 'securityCode'), classes.halfField),
						orNull((fieldId === 'expDate'), classes.expDate),
						orNull((fieldId === 'securityCode'), classes.securityCode),
					)}
				>
					<label className={classes.label} htmlFor={fieldId}>
						{fieldLabel}<span className={classes.redText}>*</span>:
					</label>
					<input
						type="text"
						className={classes.input}
						placeholder={fieldPlaceholder}
						onChange={textFieldSetInputHandler(
							moduleKey, fieldPath, setInput, fieldType,
						)}
					/>
					{/* <TextField
						fullWidth={ternary((fieldId !== 'expDate' && fieldId !== 'securityCode'), true, false)}
						id={fieldId}
						type={fieldType}
						multiline={fieldMultiline}
						variant="outlined"
						value={fieldValue}
						error={fieldHasError}
						helperText={fieldError}
					/> */}
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
