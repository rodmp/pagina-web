import { prop, propOr } from 'ramda'
import {
    PARTITION_KEY, SORT_KEY, GSI1_INDEX_NAME, GSI1_PARTITION_KEY, GSI1_SORT_KEY,
} from 'root/src/shared/constants/apiDynamoIndexes'

export const authenticationProp = prop('authentication')
export const payloadSchemaProp = prop('payloadSchema')
export const toInternalValueProp = prop('toInternalValue')
export const actionProp = prop('action')
export const toRepresentationProp = prop('toRepresentation')
export const responseSchemaProp = prop('responseSchema')


export const authenticationPropOr = propOr('authentication')
export const payloadSchemaPropOr = propOr('payloadSchema')
export const toInternalValuePropOr = propOr('toInternalValue')
export const actionPropOr = propOr('action')
export const toRepresentationPropOr = propOr('toRepresentation')
export const responseSchemaPropOr = propOr('responseSchema')

export const pkProp = prop(PARTITION_KEY)
export const skProp = prop(SORT_KEY)

export const dynamoItemsProp = prop('Items')

export const projectPendingKey = 'pending'
export const projectApprovedKey = 'approved'
export const projectRejectedKey = 'rejected'
