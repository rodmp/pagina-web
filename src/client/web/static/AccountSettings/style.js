import styled from 'root/src/client/web/base/StaticLayout/style'
import {
	primaryColor, secondaryColor,
} from 'root/src/client/web/commonStyles'

const styles = {
	section: {
		...styled.section,
		lineHeight: '24px',
		fontFamily: 'Roboto, sans-serif',
		paddingBottom: 38,
	},
	sectionTitle: {
		fontSize: 32,
		fontWeight: 'bold',
		marginTop: -20,
		marginBottom: 0,
		textAlign: 'center',
	},
	buttons: {
		paddingTop: 20,
	},
	button: {
		margin: '0 auto',
		display: 'block',
		width: '100%',
		maxWidth: 360,
		marginTop: 45,
		borderRadius: 20,
		fontSize: 18,
		boxShadow: '0 5px 6px 0 rgba(0, 0, 0, 0.16)',
		textTransform: 'none',
		cursor: 'pointer',
		color: 'white',
		border: 'none',
		backgroundColor: primaryColor,
		'&:hover': {
			backgroundColor: secondaryColor,
		},
		height: 48.1,
	},
	link: {
		textDecoration: 'none',
	},
}

export default styles
