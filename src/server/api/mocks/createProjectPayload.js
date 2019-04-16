
import { map } from 'ramda'
import { hacker, lorem, random, name } from 'faker'
import { randomArrayElements } from 'root/src/shared/util/randomNumber'

const twitchStreamers = [
	'timthetatman', 'syndicate', 'riotgames',
	'summit1g', 'shroud', 'tsm_myth', 'ninja',
]

const twitchStreamerIds = [
	{ id: 19571641 }, // ninja
	{ id: 28462004 }, // garenatw (to test no description)
]

const gameIds = [
	{ id: 138585 }, // hearthstone
]

export default ({ assigneeCount = 1 } = {}) => ({
	title: name.title(), // Changing this one because is generates a title more than 60 char.
	description: lorem.paragraph(),
	stripeCardId: random.uuid(),
	pledgeAmount: random.number(),
	favoritesAmount: random.number(),
	assignees: twitchStreamerIds,
	games: gameIds,
})
