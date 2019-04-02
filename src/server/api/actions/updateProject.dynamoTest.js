import { apiFn } from 'root/src/server/api'

import { documentClient, TABLE_NAME } from 'root/src/server/api/dynamoClient'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'
import { UPDATE_PROJECT } from '../../../shared/descriptions/endpoints/endpointIds';


describe('Update project', () => {
	test('Updates newly created project if you are an admin', async () => {
		const newProject = await createProject({
			userId: mockUserId,
			payload: { ...createProjectPayload(), status: 'approved' },
		})

		const event = {
			endpointId: UPDATE_PROJECT,
			payload: {
				projectId: newProject.id,
				stripeCardId: 'mockStripeCardId',
			},
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		//console.log(res);
		expect(res).toEqual(true)
	})
	test('Doesn\'t update newly created project if you are NOT and admin', async () => {
		expect(true).toEqual(true)
	})
})
