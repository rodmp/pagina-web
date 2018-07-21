export default (obj, key) => ({
	'Fn::GetAtt': [obj, key]
})
