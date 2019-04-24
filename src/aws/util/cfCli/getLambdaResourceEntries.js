import { reduce, toPairs, prop, append, path, propEq } from 'ramda'

export default ({ cloudFormationTemplate, timeStamp }) => (
	reduce((result, [resourceKey, resourceObj]) => {
		if (propEq('Type', 'AWS::Lambda::Function', resourceObj)) {
			return append({
				resourceKey,
				resourceZipFileName: `${resourceKey}.js.zip`,
				s3Key: `${resourceKey}_${timeStamp}.zip`,
				entryPath: path(['Properties', 'Code'], resourceObj),
			}, result)
		}
		return result
	}, [], toPairs(prop('Resources', cloudFormationTemplate)))
)
