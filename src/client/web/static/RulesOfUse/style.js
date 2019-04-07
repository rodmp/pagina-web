import styled from 'root/src/client/web/base/StaticLayout/style'

const styles = {
	section: {
		...styled.section,
		lineHeight: '24px',
		'& p': {
			fontSize: 18,
			lineHeight: '24px',
		},
	},
	list: {
		...styled.list,
		fontSize: 16,
		lineHeight: '22px',
		paddingLeft: 30,
		'& li': {
			marginBottom: 12,
		},
	},
}

export default styles
