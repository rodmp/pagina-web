const defaultStyles = {
	width: '100%',
	maxWidth: 360,
	outline: 'none',
	borderRadius: 30,
	background: 'none',
	border: '1px solid #800080',
	fontSize: 18,
	cursor: 'pointer',
	boxShadow: '0 5px 6px 0 rgba(0, 0, 0, 0.16)',

	'@media (max-width: 600px)': {
		maxWidth: 342,
	},
}

const styledTwitchButton = {
	button: {
		...defaultStyles,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 3,
		color: '#800080',
		lineHeight: 1,
		fontWeight: 500,

		'& i': {
			fontSize: 25,
			fontWeight: 700,
			marginRight: 18,
		},

		'& .button-subtitle': {
			fontSize: 12,
			fontWeight: 200,
		},
	},
}

const styledPledgeButton = {
	button: {
		...defaultStyles,
		fontWeight: 700,
		padding: 10,
		marginBottom: 20,
		backgroundColor: '#800080',
	},
}

const styledSimpleButton = {
	button: {
		width: 136,
		height: 32,
		fontSize: 14,
		fontWeight: 400,
		borderRadius: 16,
		border: '1px solid #800080',
		outline: 'none',
		cursor: 'pointer',
		backgroundColor: '#fff',
		color: '#000',
	},
}

export { styledSimpleButton, styledTwitchButton, styledPledgeButton }
