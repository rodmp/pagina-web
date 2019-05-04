import { Token } from '@types'
// import { differenceInSeconds } from 'date/fns'
import Cookies from 'js-cookie'

/**
 * @param cookies - cookies, should be passed if used on server, only (for SSR)
 */
const getAuthToken = (cookies?: string) => {
  if (cookies) {
    // @ts-ignore: Property does not exist
    global.document = {
      cookie: cookies
    }
  }
  // const tokenData: Token | null = JSON.parse(JSON.stringify(localStorage.getItem('TOKEN_DATA')))
  const tokenData: Token | null = Cookies.getJSON('TOKEN_DATA')
  if (tokenData) {
    const expiresIn = tokenData.expires_in
    const createdAt = tokenData.created_at
    const expiresAt = createdAt + expiresIn
    // const expiresInGap = expiresIn / 2
    const currentAt = Number((Number(new Date) / 1000).toFixed(0))
    const isTokenUnexpired = currentAt < expiresAt
    // const difference = differenceInSeconds(expiresAt, currentAt)

    // TODO: reuse refreshToken if needed? but not in this place?
    // if (difference > expiresInGap)
    if (isTokenUnexpired) {
      return tokenData.access_token
    }
  }
  return
}

export default getAuthToken
// export { getAuthToken }
