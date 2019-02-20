import React, { memo } from 'react'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'

import TextField from '@material-ui/core/TextField'
import fieldInputConnector from 'sls-aws/src/client/logic/form/connectors/fieldInputConnector'
import textFieldSetInputHandler from 'sls-aws/src/client/logic/form/handlers/textFieldSetInputHandler'
import MinMaxLength from 'sls-aws/src/client/web/base/MinMaxLength'
import withModuleContext from 'sls-aws/src/client/util/withModuleContext'

const styles = {
	fieldMax: {
		marginTop: 9,
	},
}

export const InputField = memo(({
	moduleKey, fieldId, fieldPath, setInput, fieldValue, fieldLabel, fieldError,
	fieldHasError, fieldType, fieldMultiline, fieldPlaceholder, fieldMax, classes,
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
))

export default withModuleContext(
	fieldInputConnector(InputField, styles),
)
