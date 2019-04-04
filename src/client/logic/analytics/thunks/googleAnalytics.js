import ReactGA from 'react-ga'
import { googleTag } from 'root/src/shared/constants/pageData'


export default () => {
	ReactGA.initialize(googleTag)
	ReactGA.pageview(window.location.pathname + window.location.search)
}

export const googleAnalytics = ReactGA
