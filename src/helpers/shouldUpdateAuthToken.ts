import { Token } from '@types'

const shouldUpdateAuthToken = (tokenData: Token | undefined) => {
  if (!tokenData) return false

  const { expires_in, created_at } = tokenData

  const earlyExpire = expires_in / 2
  const refreshAt = (created_at + earlyExpire) * 1000
  const shouldRefresh = Date.now() > refreshAt

  return shouldRefresh
}

export default shouldUpdateAuthToken
