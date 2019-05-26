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
    return tokenData
  }

  return
}

export default getAuthToken