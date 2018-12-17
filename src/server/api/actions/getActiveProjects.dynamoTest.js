import { map, range } from 'ramda'

import wait from 'sls-aws/src/testUtil/wait'

import { apiFn } from 'sls-aws/src/server/api'

import { GET_ACTIVE_PROJECTS } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import createProject from 'sls-aws/src/server/api/actions/createProject'

import contextMock, { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'
import { projectApprovedKey } from 'sls-aws/src/server/api/lenses'
import auditProject from 'sls-aws/src/server/api/actions/auditProject'

describe('getActiveProjects', () => {
	test('Successfully get active projects', async () => {
		const [newProject1, newProject2] = await Promise.all(
			map(
				() => createProject({
					userId: 'user-differentuserid',
					payload: createProjectPayload(),
				}),
				range(1, 5),
			),
		)
		await Promise.all(
			map(
				project => auditProject({
					userId: mockUserId,
					payload: {
						projectId: project.id,
						audit: projectApprovedKey,
					},
				}),
				[newProject1, newProject2],
			),
		)
		// So this kinda sucks, but there is no way to ConsistenRead on a GSI.
		// This test will fail because of a race condition occasionally. Should
		// figure out a better solution to this at some point...maybe a retry?
		await wait(750)
		const event = {
			endpointId: GET_ACTIVE_PROJECTS,
		}
		const res = await apiFn(event, contextMock)
		expect(res.body.items.length).toEqual(2)
		expect(res.body.items[0].sk).toEqual(newProject1.sk)
		expect(res.body.items[1].sk).toEqual(newProject2.sk)
	})
})
