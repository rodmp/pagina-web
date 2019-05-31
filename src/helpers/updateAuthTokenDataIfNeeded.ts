import { Token } from '@types'

import shouldUpdateAuthToken from '~/helpers/shouldUpdateAuthToken'
import updateAuthToken from '~/helpers/updateAuthToken'

export default async function updateAuthTokenDataIfNeeded(tokenData?: Token) {
  if (tokenData) {
    try {
      switch (shouldUpdateAuthToken(tokenData)) {
        case 2: {
          const tokenDataNew = await updateAuthToken(tokenData)
          return tokenDataNew
        }
        case 1: {
          updateAuthToken(tokenData)
          return tokenData
        }
        default:
          return
      }
    } catch {
      return
    }
  }
}
