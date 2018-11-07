
import { map } from 'ramda'
import { hacker, image, lorem, random } from 'faker'
import { randomArrayElements } from 'sls-aws/src/util/randomNumber'

const twitchStreamers = [
	'timthetatman', 'syndicate', 'riotgames',
	'summit1g', 'shroud', 'tsm_myth', 'ninja',
]

export default ({ assigneeCount = 1 } = {}) => ({
	title: hacker.phrase(),
	image: image.imageUrl(),
	description: lorem.paragraph(),
	stripeCardId: random.uuid(),
	pledgeAmount: random.number(),
	assignees: map(streamer => ({
		url: `https://www.twitch.tv/${streamer}`,
	}), randomArrayElements(twitchStreamers, assigneeCount)),
})
