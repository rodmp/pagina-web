import { map, range } from 'ramda'

import { apiFn } from 'sls-aws/src/server/api'

import { GET_PENDING_PROJECTS } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import createProject from 'sls-aws/src/server/api/actions/createProject'

import { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'

// So this kinda sucks, but there is no way to ConsistenRead on a GSI.
// This test will fail because of a race condition occasionally. Should figure
// out a better solution to this at some point...maybe a retry?
const wait = time => new Promise((resolve) => { setTimeout(resolve, time) })

describe('getPendingProjects', () => {
	test('Successfully get pending projects', async () => {
		await Promise.all(
			map(
				() => createProject({
					userId: mockUserId,
					payload: createProjectPayload(),
				}),
				range(1, 3),
			),
		)
		await wait(500)
		const event = {
			endpointId: GET_PENDING_PROJECTS,
		}
		const res = await apiFn(event)
		expect(res.body.items.length).toEqual(2)
	})
})
