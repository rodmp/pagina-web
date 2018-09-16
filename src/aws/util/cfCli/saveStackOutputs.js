import { compose, path, assoc, prop, reduce } from 'ramda'
import fs from 'fs'


export const formatStackOutput = compose(
	reduce((result, cfOutputObj) => assoc(
		prop('OutputKey', cfOutputObj),
		prop('OutputValue', cfOutputObj),
		result,
	), {}),
	path(['Stacks', 0, 'Outputs']),
)

export const saveOutput = (projectRoot, outputPath, stackOutput) => (
	new Promise(
		(resolve, reject) => {
			fs.writeFile(
				`${projectRoot}/${outputPath}`,
				JSON.stringify(formatStackOutput(stackOutput), null, 2),
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
