import {
  CLEAR_PARTIAL_FORM_KEYS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import clearPartialFormKeysPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/clearPartialFormKeysPayloadSchema'
import getProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = clearPartialFormKeysPayloadSchema
export const responseSchema = getProjectPayloadSchema

export default {
  [CLEAR_PARTIAL_FORM_KEYS]: {
    authentication: authenticated,
    payloadSchema,
  },
}
