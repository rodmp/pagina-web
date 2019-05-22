import { Token } from '@types'
import Cookies from 'js-cookie'

/**
 * @param cookies - cookies, should be passed if used on server, only (for SSR)
 */
const getAuthToken = (cookie?: string) => {
  if (cookie) {
    // TODO:X declare global document
    // @ts-ignore: Property does not exist
    // https://github.com/prometheonsystems/bedrock-client2/issues/8
    global.document = { ...global.document, cookie }
  }
  const tokenData: Token | undefined = Cookies.getJSON('TOKEN_DATA')
  if (tokenData) {
    const expiresIn = tokenData.expires_in
    const createdAt = tokenData.created_at
    const expiresAt = createdAt + expiresIn
    const currentAt = Number((Number(new Date()) / 1000).toFixed(0))
    const isTokenUnexpired = currentAt < expiresAt

    // TODO:X reuse refreshToken if needed (to generate accessToken)? but not in this place?
    // https://github.com/prometheonsystems/bedrock-client2/issues/9
    // const difference = differenceInSeconds(expiresAt, currentAt)
    // const expiresInGap = expiresIn / 2
    // if (difference > expiresInGap)
    if (isTokenUnexpired) {
      return tokenData.access_token
    }
  }
  return
}

export default getAuthToken
// export { getAuthToken }
