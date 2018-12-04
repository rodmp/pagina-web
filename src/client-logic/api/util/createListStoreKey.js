import objectHash from 'object-hash'

export default (recordType, filters = {}) => (
	`${recordType}-${objectHash({ filters })}`
)
