import styled from 'root/src/client/web/base/StaticLayout/style'

const color = 'rgba(0, 0, 0, 0.87)'

const styles = {
	section: {
		...styled.section,
		maxWidth: 825,
		padding: '0 28px',
		margin: '0 auto auto auto',
		color,
		'@media (min-width: 600px)': {
			padding: '0 84px',
		},
		'@media (min-width: 768px)': {
			padding: '0 150px',
		},
		justifyContent: 'space-between',
	},
	space: {
		flexGrow: 1,
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
		flexGrow: 1,
		backgroundPosition: 'top',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		minHeight: '150px !important',
		'@media (max-width: 636px)': {
			minHeight: '200px !important',
		},
		'@media (min-width: 636px)': {
			minHeight: '300px !important',
		},
		'@media (min-width: 1280px)': {
			minHeight: '330px !important',
		},
		'@media (min-width: 1440px)': {
			backgroundPosition: '50% 15%',
		},
	},
	icons: {
		margin: '0 auto',
	},
}
export default styles
