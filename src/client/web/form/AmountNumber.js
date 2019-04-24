import React, { memo } from 'react'

import TextField from '@material-ui/core/TextField'
import fieldInputConnector from 'root/src/client/logic/form/connectors/fieldInputConnector'
import textFieldSetInputHandler from 'root/src/client/logic/form/handlers/textFieldSetInputHandler'
import withModuleContext from 'root/src/client/util/withModuleContext'
import MonetizationOn from '@material-ui/icons/MonetizationOn'

const styles = {
	amountWrap: {
		display: 'flex',
		width: 205,

		'& fieldset': {
			borderRadius: 0,
		},
	},
	amountIconWrap: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid rgba(0, 0, 0, 0.23)',
		borderRight: 'none',
		minWidth: 45,
		width: 45,
		height: 54,
	},
	icon: {
		width: 35,
		height: 35,
	},
}

export const InputField = memo(({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError, fieldMultiline, fieldPlaceholder, classes,
}) => (
	<div className={classes.amountWrap}>
		<div className={classes.amountIconWrap}>
			<MonetizationOn className={classes.icon} />
		</div>
		<TextField
			id={fieldId}
			label={fieldLabel}
			type="text"
			multiline={fieldMultiline}
			variant="outlined"
			value={fieldValue}
			error={fieldHasError}
			helperText={fieldError}
			placeholder={fieldPlaceholder}
			onChange={textFieldSetInputHandler(
				moduleKey, fieldPath, setInput, 'number',
			)}
		/>
	</div>
))

export default withModuleContext(
	fieldInputConnector(InputField, styles),
)
