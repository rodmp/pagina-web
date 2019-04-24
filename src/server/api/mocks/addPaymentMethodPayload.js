import { random } from 'faker'

export default () => ({
	stripeCardId: random.uuid(),
	brand: 'Visa',
	expMonth: 4,
	expYear: 2020,
	lastFour: '5542',
})
