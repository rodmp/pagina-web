import { apiFn } from 'root/src/server/api'
import moment from 'moment'
import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'

describe('getProject', () => {
	test('gets single project with my pledge amount appended', async () => {
		const newProjectPayload = createProjectPayload()
		const newProject = await createProject({
			userId: mockUserId,
			payload: newProjectPayload,
		})
		const event = {
			endpointId: GET_PROJECT,
			payload: { projectId: newProject.id },
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				myPledge: newProjectPayload.pledgeAmount,
			},
		})
	})
	test('time diff should be 0 days', async () => {
		const newProjectPayload = createProjectPayload()
		const newProject = await createProject({
			userId: mockUserId,
			payload: newProjectPayload,
		})
		const event = {
			endpointId: GET_PROJECT,
			payload: { projectId: newProject.id },
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		const { created } = res.body
		const diff = moment().diff(created, 'days')
		expect(diff).toEqual(0)
	})
})
