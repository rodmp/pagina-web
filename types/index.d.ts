import {
  GetInitialProps,
  NextContext as NextContextOriginal,
  NextFunctionComponent as NextFunctionComponentOriginal,
} from 'next'
import {
  AppProps as AppPropsInitial,
  DefaultAppIProps,
  NextAppContext as NextAppContextOriginal,
} from 'next/app'
import { DefaultQuery, Omit } from 'next/router'
import { ReactElement } from 'react'
import { Request } from 'react-request-hook'

// TODO:X move types into parts, to different files, think about its structure
// https://github.com/prometheonsystems/bedrock-client2/issues/23

/**
 * Every component from `pages` must be this type of function.
 *
 * For static pages which does not request any data, they may not have type:
 *
 *      const Login: PageType = () => {}
 *
 * If it's requesting some data with `getInitialProps`, it should have a type of the requested data:
 *
 *      const DataInbox: PageType<Token> = props => {
 *        const [response, getEntities] = props.resource
 *      }
 *      DataInbox.getInitialProps = getInitialPropsBy(Api.entities, [])
 */
type PageType<TPayload = any> = NextFunctionComponentOriginal<
  Resource<TPayload>,
  any,
  NextContextOriginal & GetInitialPropsExtended
>

type AppProps = AppPropsInitial & GetInitialPropsExtended
interface AppLayoutProps extends GetInitialPropsExtended {
  Page: PageType<any>
  pageProps: any
}

interface GetInitialPropsExtended {
  authToken?: string
}

export interface Token {
  access_token: string
  created_at: number
  expires_in: number
  refresh_token: string
  token_type: string
}

interface ResourceOkResponse<TPayload> {
  data: TPayload
  error?: undefined
}

interface ResourceErrorResponse<TPayload> {
  data?: undefined
  error: {}
}

type ResourceResponse<TPayload> =
  | ResourceOkResponse<TPayload>
  | ResourceErrorResponse<TPayload>

// type ResourceCallback = () => void | undefined

export interface Resource<TPayload> {
  resource: {
    initialResponse: ResourceResponse<TPayload>
  }
}
type NextContext = NextContextOriginal & GetInitialPropsExtended

interface NextAppContextExtended {
  ctx: NextContext
}

type NextAppContext = NextAppContextOriginal & NextAppContextExtended
