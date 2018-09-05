import { path } from 'ramda'
import fs from 'fs'

const stackOutputPath = path(['Stacks', 0, 'Outputs'])

export const saveOutput = (projectRoot, outputPath, stackOutput) => (
	new Promise(
		(resolve, reject) => {
			fs.writeFile(
				`${projectRoot}/${outputPath}`,
				JSON.stringify(stackOutputPath(stackOutput), null, 2),
				(err) => {
					if (err) {
						reject(err)
					}
					resolve()
				},
			)
		},
	)
)


export default ({
	cloudFormationClient, stackName, projectRoot, outputPath,
}) => (
	cloudFormationClient.describeStacks({
		StackName: stackName,
	}).promise().then(
		stackOutput => saveOutput(projectRoot, outputPath, stackOutput),
	)
)
