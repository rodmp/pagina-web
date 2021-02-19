import { Token } from '@types'

const shouldUpdateAuthToken = (tokenData: Token) => {
  const { expires_in, created_at } = tokenData

  const expiresInGap = expires_in / 2
  const expiresAt = (created_at + expires_in) * 1000
  const refreshAt = (created_at + expiresInGap) * 1000
  const currentAt = Date.now()

  switch (true) {
    case currentAt > expiresAt:
      return 2
    case currentAt > refreshAt:
      return 1
    default:
      return 0
  }
}

export default shouldUpdateAuthToken
