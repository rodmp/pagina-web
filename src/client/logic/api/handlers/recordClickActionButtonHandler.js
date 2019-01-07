export default (recordId, recordClickActionId, recordClickAction) => () => (
	recordClickAction(recordClickActionId, recordId)
)
