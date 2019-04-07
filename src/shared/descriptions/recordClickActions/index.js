import approveProject from 'root/src/shared/descriptions/recordClickActions/approveProject'
import rejectProject from 'root/src/shared/descriptions/recordClickActions/rejectProject'
import rejectActiveProject from 'root/src/shared/descriptions/recordClickActions/rejectActiveProject'

export default {
	...approveProject,
	...rejectProject,
	...rejectActiveProject,
}
