import Result from 'folktale/result'
import reportError from 'sls-aws/src/shared/util/reportError'

export const storageGet = key => Result.try(
	() => localStorage.getItem(key)
).mapError(reportError)

export const storageSet = (key, value) => Result.try(
	() => localStorage.setItem(key, value)
).mapError(reportError)

export const storageClear = () => Result.try(
	() => localStorage.clear()
).mapError(reportError)
