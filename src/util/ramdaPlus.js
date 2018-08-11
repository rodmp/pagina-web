import { curry, __ } from 'ramda'


export const ternary = curry((bool, truth, faulty) => (bool ? truth : faulty))

export const orNull = ternary(__, __, null)
