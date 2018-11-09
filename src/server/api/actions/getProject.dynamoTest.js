import { apiFn } from 'sls-aws/src/server/api'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import createProject from 'sls-aws/src/server/api/actions/createProject'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import contextMock from 'sls-aws/src/server/api/mocks/contextMock'


const event = {
	endpointId: CREATE_PROJECT,
	payload: createProjectPayload(),
}

describe('getProject', () => {
	test('createProject', async () => {
		const newProject = createProjectPayload()
		await createProject(createProjectPayload()
		const res = await apiFn(event, contextMock)
		const tableScan = await scanTable()
		expect(res).toBe(true)
	})
})
