import React, { memo, useState } from 'react'

import { orNull, ternary } from 'root/src/shared/util/ramdaPlus'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import {
	expDate,
	universalForm,
	securityCode,
	email,
	password,
	newPassword,
} from 'root/src/client/web/componentTypes'

import TextField from '@material-ui/core/TextField'
import fieldInputConnector from 'root/src/client/logic/form/connectors/fieldInputConnector'
import textFieldSetInputHandler from 'root/src/client/logic/form/handlers/textFieldSetInputHandler'
import MinMaxLength from 'root/src/client/web/base/MinMaxLength'


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

const UniversalFormTextField = ({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError, fieldHasError,
	fieldType, fieldPlaceholder, classes, wasSubmitted }) => {
	const [previousValue, setPreviousValue] = useState('')
	return (
		<div className={
			classNames(
				'flex layout-column',
				classes.field,
				orNull((fieldId === expDate || fieldId === securityCode), classes.halfField),
				orNull((fieldId === expDate), classes.expDate),
				orNull((fieldId === securityCode), classes.securityCode),
			)}
		>
			{
				ternary(
					fieldId === email || fieldId === password || fieldId === newPassword,
					<label className={classes.label} htmlFor={fieldId}>
						{fieldLabel}
					</label>,
					<label className={classes.label} htmlFor={fieldId}>
						{fieldLabel}<span className={classes.redText}>*</span>:
					</label>,
				)}
			<input
				id={fieldId}
				type={fieldType}
				className={classes.input}
				placeholder={fieldPlaceholder}
				onChange={textFieldSetInputHandler(
					moduleKey, fieldPath, setInput, fieldType, setPreviousValue, previousValue,
				)}
				value={fieldValue}
			/>
			{
				orNull(fieldHasError && wasSubmitted,
					<p className={classNames(classes.error, classes.redText)}>
						{fieldError}
					</p>)
			}
		</div>
	)
}

const StyledTextField = ({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError, fieldHasError,
	fieldType, fieldMultiline, fieldPlaceholder, classes, fieldMax,
}) => (
	<div>
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
		{orNull(
			fieldMax,
			<div className={classes.fieldMax}>
				<MinMaxLength>{`${fieldValue.length}/${fieldMax}`}</MinMaxLength>
			</div>,
		)}
	</div>
)

export const InputField = memo((props) => {
	switch (props.formType) {
		case universalForm:
			return UniversalFormTextField(props)
		default:
			return StyledTextField(props)
	}
})

export default fieldInputConnector(withStyles(styles)(InputField))
