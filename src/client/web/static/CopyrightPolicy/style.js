import styled from 'root/src/client/web/base/StaticLayout/style'

const styles = {
	section: {
		...styled.section,
		lineHeight: '24px',
		'& p': {
			lineHeight: '24px',
			'@media (max-width: 375px)': {
				fontSize: 14,
			},
		},
		'& strong': {
			display: 'block',
		},

		'& a': {
			textDecoration: 'underline',
		},
	},
	wrapper: {
		paddingLeft: 30,
	},
	sectionTitle: {
		...styled.sectionTitle,
		fontSize: 22,
		marginBottom: 0,
		marginTop: 0,
	},
}

export default styles
