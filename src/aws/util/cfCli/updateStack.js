export default ({
	stackName, cloudFormationClient, templateUrl,
}) => cloudFormationClient.updateStack({
	StackName: stackName,
	Capabilities: ['CAPABILITY_IAM'],
	TemplateBody: templateUrl,
}).promise()
