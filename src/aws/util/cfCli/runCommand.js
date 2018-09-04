import { reduce } from 'ramda'
import ora from 'ora'

import commands from 'sls-aws/src/aws/util/cfCli/commands'
import getStackStatus from 'sls-aws/src/aws/util/cfCli/getStackStatus'

const runCommandSteps = (command, config) => reduce(
	(result, { title, fn }) => result.then(() => {
		const spinner = ora(title).start()
		return fn(config).then(() => {
			spinner.succeed()
			// return stepConfig
		}).catch((err) => {
			spinner.fail()
			return Promise.reject(err)
		})
	}),
	Promise.resolve(config),
	commands[command],
)

export default (command, config) => {
	if (command === 'deploy') {
		const spinner = ora('Getting stack status').start()

		return getStackStatus(config).then((updateOrCreate) => {
			spinner.succeed()
			return runCommandSteps(updateOrCreate, config)
		}).catch((err) => {
			spinner.fail()
			return Promise.reject(err)
		})
	}
	return runCommandSteps(command, config)
}
