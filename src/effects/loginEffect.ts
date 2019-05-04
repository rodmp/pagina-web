import { Token } from '@types'
import { addSeconds } from 'date-fns'
import Cookies from 'js-cookie'
import { RouterProps } from 'next-server/router'

interface Args {
  token?: Token | null,
  router: RouterProps
}

const loginEffect = ({ token, router }: Args) => () => {
  if (token) {
    const { expires_in } = token
    const expires = addSeconds(new Date(), expires_in)
    Cookies.set('TOKEN_DATA', token, { expires })
    // TODO: push dynamically, to previous page, by query?
    router.push('/')
  }
}

export default loginEffect
