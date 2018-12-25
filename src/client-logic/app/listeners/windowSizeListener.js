import testMediaBreakpoints from 'sls-aws/src/client-logic/app/thunks/testMediaBreakpoints'

export default (dispatch) => {
	window.onresize = () => {
		dispatch(testMediaBreakpoints())
	}
}
