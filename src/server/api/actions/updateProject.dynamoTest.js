import { apiFn } from 'root/src/server/api'

import { documentClient, TABLE_NAME } from 'root/src/server/api/dynamoClient'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'
import { UPDATE_PROJECT } from '../../../shared/descriptions/endpoints/endpointIds'


describe('Update project', () => {
	test('Updates newly created project if you are an admin', async () => {
		const newProject = await createProject({
			userId: mockUserId,
			payload: { ...createProjectPayload(), status: 'approved' },
		})
		const description = 'This is a new description'
		const title = 'This is the new title'

		const event = {
			endpointId: UPDATE_PROJECT,
			payload: {
				projectId: newProject.id,
				stripeCardId: 'mockStripeCardId',
				description,
				title,
			},
			authentication: mockUserId,
		}
		const res = await apiFn(event)

		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				description,
				title,
			},
		})
	})
	// TODO: check this test case
	// test('Doesn\'t update created project if you are NOT and admin', async () => {
	// 	const newProject = await createProject({
	// 		userId: mockUserId,
	// 		payload: { ...createProjectPayload(), status: 'approved' },
	// 	})
	// 	const description = 'This is a new description'
	// 	const event = {
	// 		endpointId: UPDATE_PROJECT,
	// 		payload: {
	// 			projectId: newProject.sdd,
	// 			stripeCardId: 'mockStripeCardId',
	// 			description,
	// 		},
	// 		authentication: mockUserId,
	// 	}
	// 	const res = await apiFn(event)
	//
	// 	expect(res).toEqual({ statusCode: 400, generalErrors: 'User not an admin' })
	// })
})
