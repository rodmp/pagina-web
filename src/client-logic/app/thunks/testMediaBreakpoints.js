import { reduce } from 'ramda'

import setMediaBreakpoints from 'sls-aws/src/client-logic/app/actions/setMediaBreakpoints'

const breakpoints = [
	['xs', '(max-width: 599px)'],
	['gtXs', '(min-width: 600px)'],
	['sm', '(min-width: 600px) and (max-width: 959px)'],
	['gtSm', '(min-width: 960px)'],
	['md', '(min-width: 960px) and (max-width: 1279px)'],
	['gtMd', '(min-width: 1280px)'],
	['lg', '(min-width: 1280px) and (max-width: 1919px)'],
	['gtLg', '(min-width: 1920px)'],
	['xl', '(min-width: 1920px)'],
]

export default () => (dispatch) => {
	const mediaQueryResults = reduce((result, [name, query]) => ({
		...result,
		[name]: window.matchMedia(query).matches,
	}), {}, breakpoints)
	dispatch(setMediaBreakpoints(mediaQueryResults))
	return Promise.resolve()
}
