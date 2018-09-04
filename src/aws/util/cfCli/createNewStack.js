export default ({
	stackName, cloudFormationClient, templateUrl,
}) => cloudFormationClient.createStack({
	StackName: stackName,
	Capabilities: ['CAPABILITY_IAM'],
	TemplateURL: templateUrl,
}).promise()
