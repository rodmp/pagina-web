const styles = {
	mainContent: {
		width: '100%',
	},
	container: {
		width: '85%',
		maxWidth: 1089,
		margin: '0 auto',

		'@media (max-width: 600px)': {
			width: '96.3%',
		},
		'@media (max-width: 375px)': {
			width: '90%',
		},
	},
	question: {
		maxWidth: 325,
		margin: '0 auto',
		paddingTop: 5,

		'& h2': {
			marginBottom: 12,
			textAlign: 'center',
			fontSize: 20,
		},

		'& button:first-child': {
			marginRight: 20,
		},
	},
	footer: {
		width: 222,
		margin: '0 auto',
		paddingTop: 0,
		paddingBottom: 23,
		textAlign: 'center',
		color: '#000',
		'@media (max-width: 600px)': {
			paddingTop: 6,
			paddingBottom: 12,
		},
		'@media (max-width: 375px)': {
			paddingBottom: 35,
		},
	},
	marketplace: {
		fontWeight: 700,
		color: '#800080',
		textDecoration: 'none',
		'& a': {
			color: '#800080 !important',
		},
		'& h3': {
			fontSize: 18,
			marginBottom: 10,
		},
	},
	terms: {
		fontSize: 12,
		color: '#707070',
		fontWeight: 300,
	},
	cardWrapper: {
		paddingTop: 14,

		'@media (max-width: 375px)': {
			paddingTop: 16,
		},
	},
}

export default styles
