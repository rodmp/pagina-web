import { AppProps, NextAppContext, PageType } from '@types'
import Cookies from 'js-cookie'
import NextApp, { Container } from 'next/app'
import * as R from 'ramda'
import React from 'react'
import AppLayout from '~/components/AppLayout'
import getCachedTokenData from '~/helpers/getCachedTokenData'
import updateAuthTokenDataIfNeeded from '~/helpers/updateAuthTokenDataIfNeeded'
import Login from './login'

/**
 * This is very root component and in 95% cases it should not be touched, try to use AppLayout instead
 */

// @ts-ignore: Incompatible types
// TODO:W app should receive context too: App<P = {}, S = {}, C = {}>
// https://github.com/Microsoft/TypeScript/issues/14600
class App extends NextApp<AppProps> {
  public static async getInitialProps(props: NextAppContext) {
    const { Component, ctx } = props

    const cookie = ctx.req && ctx.req.headers.cookie
    const cachedTokenData = getCachedTokenData(cookie)
    const tokenData = await updateAuthTokenDataIfNeeded(cachedTokenData)
    const authToken = tokenData && tokenData.access_token

    ctx.authToken = authToken

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, authToken }
  }

  public render() {
    const { Component, pageProps, authToken } = this.props

    const Page = authToken ? (Component as PageType) : Login
    const layoutProps = { authToken }

    return (
      <Container>
        <AppLayout {...layoutProps} Page={Page} pageProps={pageProps} />
      </Container>
    )
  }
}

if (typeof window !== 'undefined') {
  window.Cookies = Cookies
  window.R = R
}

export default App
