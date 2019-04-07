import Result from 'folktale/result'
import reportError from 'root/src/shared/util/reportError'

const getPathFromUrl = () => Result.try(
	() => {
		if (window.location.hash) {
			return window.location.pathname + window.location.hash
		}
		return window.location.pathname
	},
).mapError(reportError).getOrElse(undefined)

export default getPathFromUrl
