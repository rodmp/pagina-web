import { prop, compose, contains, path } from 'ramda'

const stackStatusPath = path(['Stacks', 0, 'StackStatus'])

// const inProgressStatus = compose(
// 	contains('_IN_PROGRESS'),
// 	prop('StackStatus'),
// )

const completeStatus = compose(
	contains('_COMPLETE'),
	stackStatusPath,
)
const failedStatus = compose(
	contains('_FAILED'),
	stackStatusPath,
)

export default ({ stackName, cloudFormationClient }) => new Promise(
	(resolve, reject) => {
		const interval = setInterval(() => {
			cloudFormationClient.describeStacks({
				StackName: stackName,
			}).promise().then(
				(res) => {
					if (completeStatus(res)) {
						clearInterval(interval)
						resolve()
					} else if (failedStatus(res)) {
						clearInterval(interval)
						reject(prop('StackStatusReason', res))
					}
					// keep checking
				},
			).catch((err) => {
				clearInterval(interval)
				reject(err.message)
			})
		}, 2000)
	},
)
