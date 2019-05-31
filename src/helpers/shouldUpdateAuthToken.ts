import { Token } from '@types'

const shouldUpdateAuthToken = (tokenData?: Token) => {
  if (!tokenData) {
    return false
  }

  const { expires_in, created_at } = tokenData

  const expiresInGap = expires_in / 2
  const refreshAt = (created_at + expiresInGap) * 1000
  const shouldRefresh = Date.now() > refreshAt

  return shouldRefresh
}

export default shouldUpdateAuthToken
