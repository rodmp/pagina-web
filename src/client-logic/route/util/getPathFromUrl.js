import Result from 'folktale/result'
import reportError from 'sls-aws/src/util/reportError'

const getPathFromUrl = Result.try(
	() => window.location.pathname
).mapError(reportError).getOrElse(undefined)

export default getPathFromUrl

