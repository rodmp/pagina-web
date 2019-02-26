import styled from 'root/src/client/web/base/StaticLayout/style'

const color = 'rgba(0, 0, 0, 0.87)'

const styles = {
	section: {
		...styled.section,
		maxWidth: 825,
		padding: '0 28px 28px 28px',
		margin: '0 auto',
		color,
		'@media (min-width: 600px)': {
			padding: '0 84px',
		},
		'@media (min-width: 768px)': {
			padding: '0 150px',
		},
		justifyContent: 'space-between',
	},
	content: {
		'@media (min-width: 768px) and (orientation: portrait)': {
			marginBottom: 150,
		},
		'@media (min-width: 1024px) and (orientation: portrait)': {
			marginBottom: 150,
		},
		'@media (min-height: 1366px) and (orientation: portrait)': {
			marginBottom: 330,
		},
	},
	sectionTitle: {
		fontSize: 32,
		fontFamily: 'Roboto, sans-serif',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	list: {
		padding: 0,
		fontFamily: 'Roboto, sans-serif',
		fontSize: 20,
		listStyle: 'none',
		textAlign: 'center',
		'& li': {
			marginBottom: 23,
			lineHeight: '140%',
			'@media (min-width: 600px)': {
				marginBottom: 28,
			},
		},
		'@media (min-width: 600px)': {
			marginBottom: 50.5,
		},
	},
	link: {
		fontWeight: 'bold',
		textDecoration: 'underline',
		fontSize: 18,
		textAlign: 'center',
		position: 'relative',
		color,
	},
	imageWrapper: {
		marginTop: 'auto',
		position: 'relative',
		minHeight: '150px !important',
		height: '100%',
		overflow: 'hidden',
		'@media (orientation: landscape) and (min-width: 1024px)': {
			minHeight: '300px !important',
		},
	},
	imageContainer: {
		marginTop: 'auto',
	},
	image: {
		position: 'absolute',
		zIndex: -1,
		width: '100%',
		flexGrow: 1,
		overflow: 'hidden',
	},
	icons: {
		margin: '0 auto',
	},
}
export default styles
