import styled from 'sls-aws/src/client/web/base/StaticLayout/style'
import content from './pageContent'

const { backgroundImage } = content;
const color = 'rgba(0, 0, 0, 0.87)'

const styles = {
  section: {
    ...styled.section,
    maxWidth: 825,
    height: '100%',
    padding: '0 28px',
    margin: '0 auto',
    color,
    '@media (min-width: 600px)': {
      padding: '0 84px',
    },
    '@media (min-width: 768px)': {
      padding: '0 150px',
    },
    justifyContent: 'space-between'
  },
  content: {
    '@media (min-width: 768px) and (orientation: portrait)': {
      marginBottom: 100
    },
    '@media (min-width: 1024px) and (orientation: portrait)': {
      marginBottom: 150
    },
  },
  sectionTitle: {
    fontSize: 32,
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    fontWeight: 'bold'
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
        marginBottom: 28
      }
    },
    '@media (min-width: 600px)': {
      marginBottom: 50.5
    },
  },
  link: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: 18,
    textAlign: 'center',
    position: 'relative',
    color
  },
  imageContainer: {
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: '50% 70%',
    backgroundRepeat: 'no-repeat',
    minHeight: '200px',
    '@media (orientation: landscape)': {
      backgroundPosition: '50% 30%',
    },
    '@media (min-width: 600px)': {
      minHeight: "50%",
    },
    '@media (min-width: 1024px)': {
      minHeight: "60%",
    },
    // '@media screen and (min-width: 1280px)': {
    //   backgroundPosition: '50% 30%',
    // minHeight: "310px",
    // minHeight: '100%'
    // }
  },
  fullWidth: {
    left: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    position: "relative",
    right: "50%",
    width: "100vw",
    zIndex: -1
  },
  icons: {
    margin: "0 auto"
  }
}
export default styles
