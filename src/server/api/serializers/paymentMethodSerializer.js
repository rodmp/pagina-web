import { split, last, compose } from 'ramda'

export default ({ brand,
	expMonth,
	expYear,
	lastFour,
	sk,
	isDefault }) => ({
	id: compose(last, split('|'))(sk),
	brand,
	expMonth,
	expYear,
	lastFour,
	isDefault,
})
