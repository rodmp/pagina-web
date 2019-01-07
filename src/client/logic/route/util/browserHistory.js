import { contains } from 'ramda'
import Result from 'folktale/result'
import reportError from 'sls-aws/src/shared/util/reportError'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export const changeBrowserHistory = (
	historyChangeType, url, { routeId, routeParams },
) => Result.try(() => {
	if (!contains(historyChangeType, ['push', 'replace'])) {
		throw new Error(`Invalid history change type: ${historyChangeType}`)
	}
	history[historyChangeType](url, { routeId, routeParams })
}).mapError(reportError)

export const historyPopEvent = fn => Result.try(() => {
	history.listen((location, action) => {
		if (action === 'POP') {
			fn(location, action)
		}
	})
}).mapError(reportError)
