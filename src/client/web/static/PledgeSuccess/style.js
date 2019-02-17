import styled from 'sls-aws/src/client/web/base/StaticLayout/style'

import image from 'sls-aws/src/client/assets/pledge-success-page.jpg'

const styles = {
	Container: {
		display: 'flex',
		justifyContent: 'center'
	},
	Rectangle: {
		width: 1280,
		// height: 683,
		backgroundColor: '#ffffff',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	Success: {
		width: 134,
		height: 38,
		fontFamily: 'Roboto',
		fontSize: 32,
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 1.19,
		letterSpacing: 0.6,
		textAlign: 'center',
		color: '#000000'
	},
	ThankYou: {
		width: 814,
		height: 126,
		fontFamily: 'Roboto',
		fontSize: 20,
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 1.2,
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#000000',
		marginBottom: 57,
		'@media (max-width: 814px)': {
			width: 466,
			height: 150,
			marginBottom: 23
		},
		'@media (max-width: 466px)': {
			width: 335,
			height: 195,
			marginBottom: 48
		}
	},
	GotoMarketplace: {
		width: 152,
		height: 22,
		fontFamily: 'Roboto',
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 1.22,
		letterSpacing: 0.2,
		textAlign: 'left',
		color: 'rgba(0, 0, 0, 0.87)',
		textDecoration: 'underline'
	},
	ActionFigures: {
		width: 1280,
		height: 355,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundImage: `url("${image}")`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		backgroundRepeat: 'no-repeat',
		marginTop: 34,
		'@media (max-width: 1280px)': {
			width: '100%',
			height: '27.7vw'
		},
		'@media (max-width: 814px)': {
			height: '38.8vw',
			marginTop: 19
		},
		'@media (max-width: 600px)': {
			height: '43.2vw',
			marginTop: 25
		},
	},
	SocialContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		height: 54,
		marginTop: 14.7
	},
	SocialIcon: {
		width: 54,
		height: 54,
		boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	Facebook: {
		backgroundColor: '#3d5a96',
		marginRight: 14.8
	},
	Twitter: {
		backgroundColor: '#2aa3ef',
		marginRight: 14.8
	},
	Youtube: {
		backgroundColor: '#f52929',
		marginRight: 14.8
	},
	Instagram: {
		backgroundImage: 'linear-gradient(to bottom, #7024c4, #c21975 42%, #c74c4d 70%, #e09b3d)',
		marginRight: 14.8
	},
	VK: {
		backgroundColor: '#4c77a6',
	}
}

export default styles
