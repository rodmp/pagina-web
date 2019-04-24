import uuid from 'uuid/v1'
// import uuid from 'uuid/v4'
import { range, sortBy, prop } from 'ramda'

function shuffle(array) {
	let currentIndex = array.length; let temporaryValue; let
		randomIndex

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

// const arr = range(1, 1000000)
const arr = range(1, 10)
const x = arr.map(num => [num, uuid()])
const shuffled = shuffle(x)

describe('uuid sort', () => {
	test('are uuids ordered?', () => {
		const sortedByUuid = sortBy(([, suuid]) => suuid, shuffled)
		// expect(shuffled).toEqual([])
		sortedByUuid.forEach(([num], i) => {
			if (i > 0) {
				expect(num).toEqual(sortedByUuid[i - 1][0] + 1)
			}
		})
		// expect(sortedByUuid).toEqual([])
	})
})
