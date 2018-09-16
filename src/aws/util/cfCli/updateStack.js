export default ({
	stackName, cloudFormationClient, templateUrl,
}) => cloudFormationClient.updateStack({
	StackName: stackName,
	Capabilities: ['CAPABILITY_IAM'],
	TemplateURL: templateUrl,
}).promise()
