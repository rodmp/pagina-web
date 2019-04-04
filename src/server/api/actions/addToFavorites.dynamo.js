import { apiFn } from 'root/src/server/api'

import { ADD_TO_FAVORITES } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'
import { internet } from 'faker'

describe('addToFavorites', () => {
	test('Can\'t add to favorites a project. Already added.', async () => {
		const newProject = await createProject({
			userId: mockUserId,
			payload: createProjectPayload(),
		})
		const event = {
			endpointId: ADD_TO_FAVORITES,
			payload: {
				projectId: newProject.id,
			},
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		expect(res).toEqual({
			statusCode: 500,
			generalErrors: "You've already added this project to your favorites",
		})
	})
	test('successfully added to your favorites', async () => {
		const newProject = await createProject({
			userId: internet.username,
			payload: createProjectPayload(),
		})
		const event = {
			endpointId: ADD_TO_FAVORITES,
			payload: {
				projectId: newProject.id,
			},
			authentication: mockUserId,
		}
		const res = await apiFn(event)

		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
			},
		})
	})
})
