import { Token } from '@types'
import axios from 'axios'
import { addSeconds } from 'date-fns'
import Cookies from 'js-cookie'
import Api from '~/Api'
import getAxiosConfig from '~/helpers/getAxiosConfig'

async function updateAuthToken(cachedTokenData: Token) {
  const refreshToken = cachedTokenData.refresh_token
  const axiosInstance = axios.create(getAxiosConfig())

  const response = await axiosInstance(Api.refreshToken({ refreshToken }))
  if (response.status >= 200 && response.status < 300) {
    const tokenData: Token = response.data
    const expires = addSeconds(new Date(), tokenData.expires_in)
    Cookies.set('TOKEN_DATA', tokenData, { expires })
    return tokenData
  }
}

export default updateAuthToken
