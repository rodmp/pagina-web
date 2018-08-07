import { compose, split, prop } from 'ramda'

export default compose(
	prop(1),
	split('-')
)
