import { linkColor } from 'root/src/client/web/commonStyles'

const styles = {
	mainContent: {
		width: '100%',
	},
	container: {
		width: '65%',
		maxWidth: 850,
		margin: '0 auto',
		paddingTop: 20,

		'@media (max-width: 750px)': {
			width: '96.3%',
		},
		'@media (max-width: 375px)': {
			width: '90%',
		},
	},
	wrapper: {
		width: '100%',
		fontSize: 16,
		fontWeight: 400,
		lineHeight: '24px',
		fontFamily: 'Sarabun, sans-serif',
		paddingTop: 15,
		paddingBottom: 100,
		color: '#000',
		textAlign: 'left',
		'& a': {
			color: linkColor,
		},
	},
	section: {
		'& a': {
			color: linkColor,
		},
	},
	sectionTitle: {
		fontSize: 32,
		fontWeight: 400,
		lineHeight: '32px',
		marginBottom: 30,
		'@media (max-width: 750)': {
			fontsize: 24,
			marginbottom: 20,
		},
	},
	list: {
		listStyle: 'disc',
		color: '#282828',
	},
}

export default styles
