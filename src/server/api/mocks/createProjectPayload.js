
import { map } from 'ramda'
import { hacker, lorem, random } from 'faker'
import { randomArrayElements } from 'sls-aws/src/shared/util/randomNumber'

const twitchStreamers = [
	'timthetatman', 'syndicate', 'riotgames',
	'summit1g', 'shroud', 'tsm_myth', 'ninja',
]

const twitchStreamerIds = [
	{ id: 19571641 }, // ninja
]

const gameIds = [
	{ id: 138585 }, // hearthstone
]

export default ({ assigneeCount = 1 } = {}) => ({
	title: hacker.phrase(),
	description: lorem.paragraph(),
	stripeCardId: random.uuid(),
	pledgeAmount: random.number(),
	assignees: twitchStreamerIds,
	games: gameIds,
})
