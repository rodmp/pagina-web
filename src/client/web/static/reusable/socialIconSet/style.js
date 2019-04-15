const styles = {
	SocialContainer: {
		display: 'flex',
		justifyContent: 'center',
		height: 54,
		paddingTop: 10,
	},
	SocialIcon: {
		width: 54,
		height: 54,
		boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 14.8,
		'@media (min-width: 375px):not(:last-of-type)': {
			marginRight: 14.8,
		},
	},
	Facebook: {
		backgroundColor: '#3d5a96',
	},
	Twitter: {
		backgroundColor: '#2aa3ef',
	},
	Youtube: {
		backgroundColor: '#f52929',
	},
	Instagram: {
		backgroundImage: 'linear-gradient(to bottom, #7024c4, #c21975 42%, #c74c4d 70%, #e09b3d)',
	},
	VK: {
		backgroundColor: '#4c77a6',
		marginRight: 0,
	},
}
export default styles
