import { compose, equals, not } from 'ramda'

import fieldError from 'root/src/client/logic/form/selectors/fieldError'

export default compose(
	not,
	equals(''),
	fieldError,
)
