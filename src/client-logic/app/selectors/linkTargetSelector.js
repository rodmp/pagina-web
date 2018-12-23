import { contains } from 'ramda'

export default (state, { href = '' }) => (
	contains('http', href) ? '_blank' : '_self'
)
