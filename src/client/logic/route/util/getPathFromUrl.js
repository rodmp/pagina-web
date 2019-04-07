import Result from 'folktale/result'
import reportError from 'root/src/shared/util/reportError'

const getPathFromUrl = () => Result.try(
	() => window.location.pathname
).mapError(reportError).getOrElse(undefined)

export default getPathFromUrl

