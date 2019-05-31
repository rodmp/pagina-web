import { Token } from '@types'
import { addSeconds } from 'date-fns'
import Cookies from 'js-cookie'

const updateAuthToken = (tokenData?: Token) => {
  if (tokenData) {
    const expires = addSeconds(new Date(), tokenData.expires_in)
    Cookies.set('TOKEN_DATA', tokenData, { expires })
  }

  return tokenData
}

export default updateAuthToken
