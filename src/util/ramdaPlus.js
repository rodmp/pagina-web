import { curry, __, compose, isEmpty, without } from 'ramda'


export const ternary = curry((bool, truth, faulty) => (bool ? truth : faulty))

export const orNull = ternary(__, __, null)

export const isSubset = compose(isEmpty, without)
