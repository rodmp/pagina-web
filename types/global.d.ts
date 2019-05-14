import * as R from 'ramda'

declare global {
  interface Window {
    Cookies: Cookies.CookiesStatic
    R: R.Static
  }
}
