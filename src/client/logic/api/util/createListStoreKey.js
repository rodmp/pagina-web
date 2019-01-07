import objectHash from 'object-hash'

export default (endpointId, filters = {}) => (
	`${endpointId}-${objectHash({ filters })}`
)
