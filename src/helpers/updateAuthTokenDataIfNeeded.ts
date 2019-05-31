import { Token } from '@types'
import axios from 'axios'
import Api from '~/Api'
import getAxiosConfig from '~/helpers/getAxiosConfig'
import shouldUpdateAuthToken from '~/helpers/shouldUpdateAuthToken'
import updateAuthToken from '~/helpers/updateAuthToken'

export default async function updateAuthTokenDataIfNeeded(tokenData?: Token) {
  if (tokenData && shouldUpdateAuthToken(tokenData)) {
    const refreshToken = tokenData.refresh_token
    const axiosInstance = axios.create(getAxiosConfig())

    try {
      const response = await axiosInstance(Api.refreshToken({ refreshToken }))

      if (response.status >= 200 && response.status < 300) {
        const authToken: Token = response.data
        updateAuthToken(authToken)
        // return authToken
      }
    } catch {
      return
    }
    // return
    // console.log(request.data)

    // if (request.status >= 200 && request.status < 300) {
    //   return request.data
    // }

    // if (initialResponse && initialResponse.data && !initialResponse.error) {
    //   updateAuthToken(initialResponse.data)
    // } else if (initialResponse && initialResponse.error) {
    //   // handle update token error ?
    // }
  }
}
