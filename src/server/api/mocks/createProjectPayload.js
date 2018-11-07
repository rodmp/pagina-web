
import { map, range } from 'ramda'
import { hacker, image, lorem, random } from 'faker'
import randomNumber, { randomArrayElements } from 'sls-aws/src/util/randomNumber'

const twitchStreamers = [
	'timthetatman', 'syndicate', 'riotgames',
	'summit1g', 'shroud', 'tsm_myth', 'ninja',
]

export default {
	title: hacker.phrase(),
	image: image.imageUrl(),
	description: lorem.paragraph(),
	stripeCardId: random.uuid(),
	pledgeAmount: random.number(),
	assignees: map(streamer => ({
		url: `https://www.twitch.tv/${streamer}`,
	}), randomArrayElements(twitchStreamers, randomNumber(2, 5))),
}
