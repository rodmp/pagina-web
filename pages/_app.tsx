import { AppProps, NextAppContext, PageType } from '@types'
import Cookies from 'js-cookie'
import NextApp, { Container } from 'next/app'
import * as R from 'ramda'
import React from 'react'
import AppLayout from '~/components/AppLayout'
import getAuthToken from '~/helpers/getAuthToken'
import shouldUpdateAuthToken from '~/helpers/shouldUpdateAuthToken'
import getInitialPropsBy from '~/helpers/getInitialPropsBy'
import Login from './login'
import Api from '~/Api';
import updateAuthToken from '~/helpers/updateAuthToken';

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
    let authToken = getAuthToken(cookie)

    if (authToken && shouldUpdateAuthToken(authToken)) {
      const request = getInitialPropsBy(Api.refreshToken, [{refreshToken: authToken.refresh_token}])
      const { resource: { initialResponse } } = await request({...ctx, authToken: authToken.access_token})

      if (initialResponse && initialResponse.data && !initialResponse.error) {
        authToken = updateAuthToken(initialResponse.data) || authToken
      } else if (initialResponse && initialResponse.error) {
        // handle update token error ?
      }
    }

    const accessToken = authToken && authToken.access_token

    ctx.authToken = accessToken

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, authToken: accessToken }
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