import { makeStyles } from '@material-ui/styles'


const primaryColor = '#303f9f'
const errorColor = '#f44336'

export const elementStyle = {
	base: {
		fontSize: '16px',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		'::placeholder': {
			color: 'transparent',
			fontSize: '16px',
		},
	},
}

export const useStyles = makeStyles({
	root: {
		marginBottom: -50,
		boxSizing: 'border-box',
		position: 'relative',
		'&:before': {
			left: 0,
			right: 0,
			bottom: 0,
			content: '""',
			position: 'absolute',
			transition: [[
				'border-bottom-color', '200ms', 'cubic-bezier(0.4, 0, 0.2, 1)',
				'0ms',
			]],
			pointerEvents: 'none',
		},
		'&:after': {
			left: 0,
			right: 0,
			bottom: 0,
			content: '""',
			position: 'absolute',
			transform: 'scaleX(0)',
			transition: [[
				'transform', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms',
			]],
			borderBottom: [[2, 'solid', primaryColor]],
			pointerEvents: 'none',
		},
	},
	errors: {
		fontSize: '0.75rem',
		textAlign: 'left',
		marginTop: 8,
		marginBottom: 6,
		minHeight: '1em',
		fontFamily: [['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif']],
		lineHeight: '1em',
		color: errorColor,
	},
	elementWrapper: {
		position: 'relative',
		padding: 15,
		paddingTop: 18,
		paddingBottom: 18,
		border: '1px solid rgba(0, 0, 0, 0.23)',
		borderRadius: 0,
		'&:hover': {
			borderColor: '#000',
		},
		transition: [['border-color', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms']],
	},
	inputLabelBase: {
		transition: [
			['color', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms'],
			['transform', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms'],
		],
		top: -4.5,
		left: 6,
		paddingLeft: 5,
		paddingRight: 5,
		position: 'absolute',
		transform: [['translate(0, 24px)', 'scale(1)']],
		color: 'rgba(0, 0, 0, 0.54)',
		padding: 0,
		fontSize: 16,
		fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'],
		lineHeight: 1,
		transformOrigin: [['top', 'left']],
		background: '#fff',
	},
	inputLabelFocus: {
		color: primaryColor,
		transform: [['translate(0, -1.5px)', 'scale(0.75)']],
		transformOrigin: [['top', 'left']],
	},
	inputLabelError: {
		color: errorColor,
	},
	labelFieldText: {
		marginBottom: 8,
	},
	elementFocus: {
		borderWidth: 2,
		paddingTop: 17,
		paddingBottom: 17,
		borderColor: '#5665b7',
		'&:hover': {
			borderColor: '#5665b7',
		},
	},
	itemList: {
		display: 'flex',
		marginTop: 10,
		marginBottom: 17,
		'& div': {
			fontSize: 16,
		},
		'& span': {
			color: '#800080',
		},
	},
	cardTitle: {
		fontWeight: 'bold',
	},
	addNewPaymentMethod: {
		fontSize: 18,
		color: '#800080',
		textTransform: 'none',
		display: 'flex',
		justifyContent: 'center',
	},
	formConrol: {
		width: 360,
	},
})
