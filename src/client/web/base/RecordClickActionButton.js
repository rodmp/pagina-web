import React, { memo } from 'react'

import recordClickActionButtonHandler from 'sls-aws/src/client/logic/api/handlers/recordClickActionButtonHandler'
import recordClickActionButtonConnector from 'sls-aws/src/client/logic/api/connectors/recordClickActionButtonConnector'

import LoadingButton from 'sls-aws/src/client/web/base/LoadingButton'

export const ActionButtonUnconnected = memo(({
	label, loading, recordId, recordClickActionId, recordClickAction,
}) => (
	<LoadingButton
		onClick={recordClickActionButtonHandler(
			recordId, recordClickActionId, recordClickAction,
		)}
		loading={loading}
	>
		{label}
	</LoadingButton>
))

export default recordClickActionButtonConnector(ActionButtonUnconnected)
