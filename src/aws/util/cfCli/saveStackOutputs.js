import { compose, path, prop, map, join } from 'ramda'
import fs from 'fs'


export const formatStackOutput = compose(
	join('\n'),
	map(cfOutputObj => (
		`export const ${prop('OutputKey', cfOutputObj)} = '${prop('OutputValue', cfOutputObj)}'`
	)),
	path(['Stacks', 0, 'Outputs']),
)

export const saveOutput = (projectRoot, outputPath, stackOutput) => (
	new Promise(
		(resolve, reject) => {
			fs.writeFile(
				`${projectRoot}/${outputPath}`,
				formatStackOutput(stackOutput),
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
