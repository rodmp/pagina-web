import { identity } from 'ramda'
import React, { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import AsyncSelect from 'react-select/lib/Async'
import classNames from 'classnames'

import autoCompleteSetInputHandler from 'sls-aws/src/client/logic/form/handlers/autoCompleteSetInputHandler'
import autoCompleteConnector from 'sls-aws/src/client/logic/form/connectors/autoCompleteConnector'
import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'


// const NoOptionsMessage = memo(({ children, innerProps }) => (
// 	<Typography color="textSecondary" {...innerProps}>
// 		{children}
// 	</Typography>
// ))


const controlStyles = {
	input: {
		display: 'flex',
		padding: [[10, 14]],
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
			variant="outlined"
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
	}) => {
		const { image, label } = children
		return (
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
				{orNull(
					image,
					<ListItemAvatar>
						<Avatar alt={label} src={image} />
					</ListItemAvatar>,
				)}
				<ListItemText primary={label} />
			</MenuItem>
		)
	}),
)

const placeholderStyles = {
	placeholder: {
		position: 'absolute',
		left: 14,
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


const chipStyles = {
	root: {
		height: 34,
		marginBottom: 2,
	},
}
const MultiValue = withStyles(chipStyles)(
	memo(({ children, classes, innerProps, removeProps }) => {
		const { image, label } = children
		return (
			<Chip
				avatar={orNull(
					image,
					<Avatar alt={label} src={image} />,
				)}
				tabIndex={-1}
				classes={classes}
				label={label}
				onDelete={removeProps.onClick}
				deleteIcon={
					<CancelIcon {...removeProps} />
				}
				{...innerProps}
			/>
		)
	}),
)


const menuStyles = {
	paper: {
		position: 'absolute',
		zIndex: 100,
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
	fieldError, fieldHasError, arrayFieldMaxItems, loadOptionsPromise,
	fieldPlaceholder,
}) => (
	<NoSsr>
		<AsyncSelect
			loadOptions={loadOptionsPromise}
			textFieldProps={{
				label: fieldLabel,
				error: fieldHasError,
				helperText: fieldError,
				InputLabelProps: {
					shrink: true,
				},
			}}
			placeholder={fieldPlaceholder}
			components={components}
			value={multiFieldValue}
			onChange={autoCompleteSetInputHandler(
				moduleKey, fieldPath, arrayFieldMaxItems, setInput,
			)}
			isMulti
			cacheOptions
			getOptionLabel={identity}
			getValue={identity}
		/>
	</NoSsr>
))

export default autoCompleteConnector(AutoCompleteUnconnected)
