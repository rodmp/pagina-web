import { Token } from '@types'
import Cookies from 'js-cookie'
import { addSeconds } from 'date-fns'

const updateAuthToken = (tokenData: Token | undefined) => {
  if (tokenData) {
    const expires = addSeconds(new Date(), tokenData.expires_in)
    Cookies.set('TOKEN_DATA', tokenData, { expires })
  }

  return tokenData || undefined
}

export default updateAuthToken
