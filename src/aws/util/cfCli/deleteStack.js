export default ({
	stackName, cloudFormationClient,
}) => cloudFormationClient.deleteStack({
	StackName: stackName,
}).promise()
