import { reduce, assoc } from 'ramda'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

export default (selectors = [], actions = []) => (component, styles) => {
	const styledComponent = styles ? withStyles(styles)(component) : component
	return connect(
		(state, props) => reduce((results, [functionName, fn]) => assoc(
			functionName, fn(state, props), results,
		), {}, selectors),
		reduce((results, [functionName, fn]) => assoc(
			functionName, fn, results,
		), {}, actions),
	)(styledComponent)
}
