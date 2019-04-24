import styled from 'root/src/client/web/base/StaticLayout/style'
import { linkHoverColor, linkColor } from 'root/src/client/web/commonStyles';

const styles = {
	listWrapper: {
		paddingBottom: 30,
	},
	listOfLinks: {
		...styled.list,
		fontSize: 14,
		paddingLeft: 20,

		'& li': {
			marginBottom: 5,
		},
		'& a': {
			color: linkColor,
			'&:hover': {
				textDecoration: 'underline',
				color: linkHoverColor,
			},
		},
	},
	list: {
		...styled.list,
		fontSize: 14,
		lineHeight: '22px',
		paddingLeft: 25,
		'& li': {
			marginBottom: 12,
		},
	},
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
	},
	sectionTitle: {
		...styled.sectionTitle,
		fontSize: 22,
		marginBottom: 18,
		marginTop: 18,
	},
}

export default styles
