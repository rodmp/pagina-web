import createProject from 'sls-aws/src/server/api/actions/createProject'
import projectPayload from 'sls-aws/src/server/api/mocks/projectPayload'
import getPledgedProjects from 'sls-aws/src/server/api/actions/getPledgedProjects'

import { userPk } from 'sls-aws/src/server/api/pkMaker'

const mockUserId = '1234123412341234'
const differentUserId = '432143214321'

describe(('getPledgedProjects'), () => {
	test('created projects', async () => {
		await Promise.all([
			createProject(differentUserId, projectPayload),
			createProject(mockUserId, projectPayload),
			createProject(mockUserId, projectPayload),
			createProject(mockUserId, projectPayload),
		])
		const res = await getPledgedProjects(mockUserId)
		expect(res.Count).toBe(3)
		expect(res.ScannedCount).toBe(3)
		expect(
			res.Items.every(project => project.pk === userPk(mockUserId)),
		).toBe(true)
	})
})
