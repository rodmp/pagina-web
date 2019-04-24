import { apiFn } from 'root/src/server/api'

import { GET_PLEDGED_PROJECTS } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import pledgeProject from 'root/src/server/api/actions/pledgeProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import createPledgeProjectPayload from 'root/src/server/api/mocks/createPledgeProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'

describe('getPledgedProjects', () => {
	test('Successfully get pledged projects', async () => {
		const [newProject1] = await Promise.all([
			createProject({
				userId: 'user-created',
				payload: createProjectPayload(),
			}),
			createProject({
				userId: 'user-created',
				payload: createProjectPayload(),
			}),
		])
		await pledgeProject({
			userId: mockUserId,
			payload: createPledgeProjectPayload(newProject1.id),
		})

		const event = {
			endpointId: GET_PLEDGED_PROJECTS,
			payload: {},
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		expect(res).toEqual({
			statusCode: 200,
			body: {
				items: [
					{
						id: newProject1.id,
						image: newProject1.image,
						myPledge: 1234,
						title: newProject1.title,
					},
				],
				next: undefined,
			},
		})
	})
})
