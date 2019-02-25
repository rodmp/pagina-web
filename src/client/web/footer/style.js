import { fontFamily, navigationColor, lineColor } from 'root/src/client/web/commonStyles'

const styles = {
	root: {
		color: 'white',
		backgroundColor: navigationColor,
	},
	container: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
	},
	text: {
		'& span': {
			fontSize: '12px',
			fontFamily,
			color: 'white',
		},
	},
	top: {
		display: 'block',
		width: '100%',
		padding: [['17px', '0', '15px', '47px']],

		'& .margin': {
			marginTop: '9px',
		},
	},
	title: {
		fontSize: '16px',
		fontWeight: 'bold',
	},
	line: {
		backgroundColor: lineColor,
		height: '1px',
		width: '100%',
	},
	bottom: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: [['11px', '28px', '15px', '47px']],

		'& .margin': {
			marginLeft: '14px',

			'@media (max-width: 600px)': {
				marginLeft: '0',
				marginBottom: '15px',

				'&:last-child': {
					marginTop: '22px',
					marginBottom: '0',
				},
			},
		},

		'@media (max-width: 600px)': {
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
			paddingBottom: '20px',
		},
	},
	bottomWrap: {
		display: 'flex',
		alignItems: 'center',

		'@media (max-width: 600px)': {
			display: 'block',
			width: '100%',
		},
	},
	imageContainer: {
		position: 'relative',
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	socialContainer: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		top: '14px',
		width: '100%',
	},
	socialIcon: {
		width: '54px',
		height: '54px',
		display: 'block',
		marginLeft: '15px',

		'& a': {
			display: 'block',
		},

		'&:first-child': {
			marginLeft: '0',
		},

		'& img': {
			width: '100%',
		},
	},
	socialContainerSmall: {
		display: 'flex',
		alignItems: 'center',

		'@media (max-width: 600px)': {
			width: '100%',
			marginBottom: '16px',
		},
	},
	socialIconSmall: {
		width: '16px',
		height: '16px',
		display: 'block',
		marginLeft: '20px',

		'&:first-child': {
			marginLeft: '0',
		},

		'&:last-child': {
			marginRight: '7px',
		},

		'& img': {
			width: '100%',
			backgroundColor: 'white',
		},
	},
	footerImg: {
		width: '100%',
		height: '355px',

		'@media (max-width: 959px)': {
			height: '233px',
		},
		'@media (max-width: 600px)': {
			height: '162px',
		},
	},
	bannerBg: {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundColor: 'black',
	},
}

export default styles
