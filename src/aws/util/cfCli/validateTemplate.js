export default ({
    cloudFormationClient, templateUrl,
}) => cloudFormationClient.validateTemplate({
	TemplateURL: templateUrl,
}).promise()
