import { reduce, append } from 'ramda'

export const promiseSeriesWaterfall = reduce(
	(result, nextP) => result.then(nextP),
	Promise.resolve([]),
)

export const promiseSeriesWaterfallAggregrate = reduce(
	(result, nextP) => result.then(
		res => nextP(res).then(nextRes => append(nextRes, res)),
	),
	Promise.resolve([]),
)

export const promiseSeriesApplyWaterfall = (applyVal, promiseArr) => reduce(
	(result, nextP) => result.then(() => nextP(applyVal)),
	Promise.resolve([]),
	promiseArr,
)

export const promiseSeriesApplyAggregrate = (applyVal, promiseArr) => reduce(
	(result, nextP) => result.then(
		res => nextP(applyVal).then(nextRes => append(nextRes, res)),
	),
	Promise.resolve([]),
	promiseArr,
)
