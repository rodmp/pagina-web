import { generate } from 'json-schema-faker'

import { payloadSchema } from 'sls-aws/src/descriptions/endpoints/createProject'

export default generate(payloadSchema)
