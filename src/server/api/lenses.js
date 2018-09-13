import { prop, propOr } from 'ramda'

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
