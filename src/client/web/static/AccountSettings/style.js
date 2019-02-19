import styled from 'sls-aws/src/client/web/base/StaticLayout/style'

const styles = {
  section: {
    ...styled.section,
    lineHeight: '24px',
    fontFamily: 'Roboto, sans-serif',
    paddingBottom: 38
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -20,
    marginBottom: 0,
    textAlign: 'center'
  },
  buttons: {
    paddingTop: 20,
  },
  button: {
    margin: "0 auto",
    display: 'block',
    width: '100%',
    maxWidth: 360,
    marginTop: 45,
    height: 48,
    backgroundColor: "#800080",
    color: '#fff',
    border: 'none',
    borderRadius: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
}

export default styles
