import NextApp, { AppProps, Container, NextAppContext } from 'next/app'
import React from 'react'
import AppLayout from '~/components/AppLayout'
import getAuthToken from '~/helpers/getAuthToken'
import Login from '~/pages/login'

interface Props extends AppProps {
  ssrAuthToken?: string
}

/**
 * This is very root component and in 95% cases it should not be touched, try to use AppLayout instead
 */
class App extends NextApp<Props> {
  public static async getInitialProps (props: NextAppContext) {
    const { Component, ctx } = props

    let ssrAuthToken
    if (ctx.req) {
      ssrAuthToken = getAuthToken(ctx.req.headers.cookie)
    }

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, ssrAuthToken }
  }

  public render () {
    const { Component, pageProps, ssrAuthToken } = this.props

    const isServer = typeof window === 'undefined'

    let clientAuthToken
    if (!isServer) {
      clientAuthToken = getAuthToken()
    }

    const authToken = ssrAuthToken || clientAuthToken
    const Page = authToken ? Component : Login
    const layoutProps = { authToken }

    return (
      <Container>
        <AppLayout {...layoutProps}>
          <Page {...pageProps} />
        </AppLayout>
      </Container>
    )
  }
}

export default App
