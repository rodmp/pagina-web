import { Token } from '@types'
import { addSeconds } from 'date-fns'
import Cookies from 'js-cookie'
import { RouterProps } from 'next/router'

interface Args {
  token?: Token | null
  router: RouterProps
}

const loginEffect = ({ token, router }: Args) => () => {
  if (token) {
    const { expires_in } = token
    const expires = addSeconds(new Date(), expires_in)
    Cookies.set('TOKEN_DATA', token, { expires })
    // TODO:X push dynamically, to previous page, by query
    // https://github.com/prometheonsystems/bedrock-client2/issues/7
    router.push('/')
  }
}

export default loginEffect
