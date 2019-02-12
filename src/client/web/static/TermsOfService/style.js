import styled from 'sls-aws/src/client/web/base/StaticLayout/style'
import { linkHoverColor } from 'sls-aws/src/client/web/commonStyles'

const styles = {
	section: {
		...styled.section,
		paddingBottom: 0,

		'& p': {
			marginBottom: 18,
			paddingLeft: 27,
			paddingRight: 27,
		},

		'@media (max-width: 750px)': {
			fontSize: 14,
			paddingBottom: 50,
			'& p': {
				marginBottom: 10,
				paddingLeft: 17,
				paddingRight: 17,
			},
		},
	},
	sectionTitle: {
		...styled.sectionTitle,
		'@media (max-width: 375px)': {
			fontSize: 22,
		},
	},
	mainParagraph: {
		fontFamily: 'Open Sans, sans-serif',
		color: '#fff',
		padding: 15,

		backgroundColor: '#800080',
		borderRadius: 3,

		'& a': {
			color: '#fff',
			textDecoration: 'none',
			'&:hover': {
				color: linkHoverColor,
			},
		},

		'@media (max-width: 750px)': {
			padding: 17,
		},
	},
	info: {
		width: '80%',
		margin: '0 auto',
		textAlign: 'center',
	},
	termsList: {
		...styled.list,
		paddingLeft: 50,
		'& li': {
			marginBottom: 18,
		},

		'@media (max-width: 750px)': {
			paddingLeft: 40,
			'& li': {
				marginBottom: 10,
			},
		},
	},
}

export default styles
