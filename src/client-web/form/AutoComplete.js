import React, { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'
import AsyncSelect from 'react-select/lib/Async'
import classNames from 'classnames'

import autoCompleteSetInputHandler from 'sls-aws/src/client-logic/form/handlers/autoCompleteSetInputHandler'
import autoCompleteConnector from 'sls-aws/src/client-logic/form/connectors/autoCompleteConnector'


const NoOptionsMessage = memo(({ children, innerProps }) => (
	<Typography color="textSecondary" {...innerProps}>
		{children}
	</Typography>
))


const controlStyles = {
	input: {
		display: 'flex',
		padding: 0,
	},
}
const inputComponent = memo(({ inputRef, ...props }) => (
	<div ref={inputRef} {...props} />
))
const Control = withStyles(controlStyles)(
	memo(({ classes, children, innerRef, innerProps, selectProps }) => (
		<TextField
			fullWidth
			InputProps={{
				inputComponent,
				inputProps: {
					className: classes.input,
					inputRef: innerRef,
					children,
				},
				...innerProps,
			}}
			{...selectProps.textFieldProps}
		/>
	)),
)


const optionStyles = {
	selected: {
		fontWeight: 500,
	},
	unSelected: {
		fontWeight: 400,
	},
}
const Option = withStyles(optionStyles)(
	memo(({
		classes, children, innerRef, isFocused, isSelected, innerProps,
	}) => (
		<MenuItem
			buttonRef={innerRef}
			selected={isFocused}
			component="div"
			className={classNames({
				[classes.selected]: isSelected,
				[classes.unSelected]: !isSelected,
			})}
			{...innerProps}
		>
			{children}
		</MenuItem>
	)),
)

const placeholderStyles = {
	placeholder: {
		position: 'absolute',
		left: 2,
		fontSize: 16,
	},
}
const Placeholder = withStyles(placeholderStyles)(
	memo(({ classes, children, innerProps }) => (
		<Typography
			color="textSecondary"
			className={classes.placeholder}
			{...innerProps}
		>
			{children}
		</Typography>
	)),
)

const valueContainerStyles = {
	valueContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1,
		alignItems: 'center',
		overflow: 'hidden',
	},
}
const ValueContainer = withStyles(valueContainerStyles)(
	memo(({ classes, children }) => (
		<div className={classes.valueContainer}>
			{children}
		</div>
	)),
)


const multiValueStyles = {
	root: {
		height: 26,
	},
}
const MultiValue = withStyles(multiValueStyles)(
	memo(({ children, classes, innerProps }) => (
		<Chip
			tabIndex={-1}
			classes={classes}
			label={children}
			onDelete={() => { console.log('remove') }}
			deleteIcon={
				<CancelIcon onClick={() => { console.log('remove') }} />
			}
			{...innerProps}
		/>
	)),
)

const menuStyles = {
	paper: {
		position: 'absolute',
		zIndex: 1,
		left: 0,
		right: 0,
	},
}
const Menu = withStyles(menuStyles)(
	memo(({ classes, children, innerProps }) => (
		<Paper
			square
			className={classes.paper}
			{...innerProps}
		>
			{children}
		</Paper>
	)),
)


const components = {
	Control,
	Menu,
	MultiValue,
	// NoOptionsMessage,
	Option,
	Placeholder,
	ValueContainer,
}

export const AutoCompleteUnconnected = memo(({
	moduleKey, fieldPath, setInput, multiFieldValue, fieldLabel,
	fieldError, fieldHasError, arrayFieldMaxItems,
}) => (
	<NoSsr>
		<AsyncSelect
			loadOptions={inputValue => new Promise((resolve) => {
				console.log(inputValue)
				setTimeout(() => {
					resolve([
						{ value: 'hey', label: 'hey' },
						{ value: 'this', label: 'this' },
						{ value: 'is', label: 'is' },
						{ value: 'cool', label: 'cool' },
					])
				}, 1000)
			})}
			textFieldProps={{
				label: fieldLabel,
				error: fieldHasError,
				helperText: fieldError,
				InputLabelProps: {
					shrink: true,
				},
			}}
			components={components}
			value={multiFieldValue}
			onChange={autoCompleteSetInputHandler(
				moduleKey, fieldPath, arrayFieldMaxItems, setInput,
			)}
			isMulti
			cacheOptions
		/>
	</NoSsr>
))

export default autoCompleteConnector(AutoCompleteUnconnected)
