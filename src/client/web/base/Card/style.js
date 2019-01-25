const styles = {
	card: {
		width: '29%',
		minWidth: '250px !important',
		maxWidth: 323,
		minHeight: 300,
		paddingLeft: 20.5,
		paddingBottom: 20,
		paddingRight: 15,
		paddingTop: 8,
		marginRight: 40,
		marginBottom: 34,
		textAlign: 'center',
		border: '1px solid #800080',

		fontSize: 20,
		lineHeight: 1.2,
		color: '#000',
		'&:nth-child(3n + 3)': {
			marginRight: 0,
		},
		'&:nth-child(even)': {
			backgroundColor: '#f5f5f5',
		},
		'& p': {
			marginTop: 0,
		},
		'& a': {
			color: '#1976d2',
			textDecoration: 'none',
		},
		'@media (max-width: 1279px)': {
			width: '100% !important',
			maxWidth: '100%',
			minHeight: 195,
			marginRight: 0,
			marginBottom: 15,
		},
		'@media (max-width: 375px)': {
			minHeight: '260px !important',
		},
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: 500,
		textTransform: 'uppercase',
		marginTop: 6,
		marginBottom: 6,
	},
	iconWrapper: {
		width: 60,
		minHeight: 60,
		'& img': {
			display: 'block',
			maxWidth: '100%',
			height: 'auto',
			objectFit: 'fill',
		},
	},
}

export default styles