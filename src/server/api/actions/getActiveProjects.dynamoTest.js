import { map, range } from 'ramda'

import wait from 'root/src/testUtil/wait'

import { apiFn } from 'root/src/server/api'

import { GET_ACTIVE_PROJECTS } from 'root/src/shared/descriptions/endpoints/endpointIds'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import createProject from 'root/src/server/api/actions/createProject'

import contextMock, { mockUserId } from 'root/src/server/api/mocks/contextMock'
import { projectApprovedKey } from 'root/src/server/api/lenses'
import auditProject from 'root/src/server/api/actions/auditProject'

describe('getActiveProjects', () => {
	test('Successfully get active projects', async () => {
		await wait(20000)
		const projectArr = await Promise.all(
			map(
				() => createProject({
					userId: 'user-differentuserid',
					payload: createProjectPayload(),
				}),
				range(1, 10),
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
				projectArr,
			),
		)
		// So this kinda sucks, but there is no way to ConsistenRead on a GSI.
		// This test will fail because of a race condition occasionally. Should
		// figure out a better solution to this at some point...maybe a retry?
		await wait(750)
		const event = {
			endpointId: GET_ACTIVE_PROJECTS,
			payload: { currentPage: 1 },
		}
		const res = await apiFn(event, contextMock)
		expect(res.body.items.length).toEqual(8)
		expect(res.body.items[0].sk).toEqual(projectArr[0].sk)
		expect(res.body.items[1].sk).toEqual(projectArr[1].sk)
		expect(res.body.allPage).toEqual(2)
	})
})
