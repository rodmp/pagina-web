import endpointMappings from 'root/src/client/logic/api/util/endpointMappings'

export default (recordType, data) => (data ? `${endpointMappings(recordType)}-${data.pk}-${data.sk.split('|')[0]}` : null)
