export default {
	modal: {
		'&>div>div': {
			width: '96%',
			margin: 0,
			maxWidth: 500,
			'@media (min-width: 600px)': {
				width: '80%',
			},
		},
	},
	modalClose: {
		transform: 'scale(0.8)',
		margin: '5px 7px 0 auto',
		border: '1px solid black',
		borderRadius: 100,
		cursor: 'pointer',
	},
	modalHeader: {
		textAlign: 'center',
		lineHeight: '100%',
		marginBottom: 25,
	},
	modalBody: {
		margin: '0 auto',
		padding: 5,
		fontSize: 17,
		textAlign: 'center',
		lineHeight: '150%',
		marginBottom: 10,
		maxWidth: 360,
	},
	modalButton: {
		width: '96%',
		margin: '50px auto',
		maxWidth: 360,
	},
}
