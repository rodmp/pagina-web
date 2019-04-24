const noStackError = stackName => (
	`Stack with id ${stackName} does not exist`
)

export default ({ stackName, cloudFormationClient }) => (
	cloudFormationClient.describeStacks({ StackName: stackName })
		.promise()
		.then(() => 'update')
		.catch((err) => {
			if (err.message === noStackError(stackName)) {
				return 'create'
			}
			return Promise.reject(err.message)
		})
)
