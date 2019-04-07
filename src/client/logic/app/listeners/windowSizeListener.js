import testMediaBreakpoints from 'root/src/client/logic/app/thunks/testMediaBreakpoints'

export default (dispatch) => {
	window.onresize = () => {
		dispatch(testMediaBreakpoints())
	}
}
