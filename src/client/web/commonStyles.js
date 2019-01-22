export const fontFamily = 'Roboto'

export const primaryColor = '#800080'
export const secondaryColor = '#A301A3'

export const linkColor = '#1976D2'
export const linkHoverColor = '#4ca2f7'

export const navigationColor = '#000'

export const navLinkStyle = {
	fontSize: 16,
	fontWeight: 500,
	textDecoration: 'none',
	color: 'white',
	backgroundColor: 'black',
	border: 0,
	cursor: 'pointer',
	'&:focus': {
		outline: 0,
	},
	'&:visited': {
		color: 'white',
	},
	'&:hover': {
		backgroundColor: '#222',
	},
	padding: [[0, 24]],
}


export const xsMediaQuery = '@media (max-width: 599px)'
export const gtXsMediaQuery = '@media (min-width: 600px)'
export const smMediaQuery = '@media (min-width: 600px) and (max-width: 959px)'
export const gtSmMediaQuery = '@media (min-width: 960px)'
export const mdMediaQuery = '@media (min-width: 960px) and (max-width: 1279px)'
export const gtMdMediaQuery = '@media (min-width: 1280px)'
export const lgMediaQuery = '@media (min-width: 1280px) and (max-width: 1919px)'
export const gtLgMediaQuery = '@media (min-width: 1920px)'
export const xlMediaQuery = '@media (min-width: 1920px)'
