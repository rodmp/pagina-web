import endpoints from 'root/src/shared/descriptions/endpoints'

export default submit => (endpoints[submit].payloadSchema)
