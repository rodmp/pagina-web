import { Token } from '@types'
import { request } from 'react-request-hook'

const Api = {
  login: ({ email, password }: { email: string, password: string }) => {
    const data = {
      email,
      grant_type: 'password',
      password,
    }
    return request<Token>({
      data,
      method: 'POST',
      url: `/oauth/token`,
    })
  },

  refreshToken: ({ refreshToken }: { refreshToken: string }) => {
    const data = {
      grant_type: 'refresh_token',
      refreshToken,
    }
    return request<Token>({
      data,
      method: 'POST',
      url: `/oauth/token`
    })
  }

  // getUsers: () => {
  //   return request<Users>({
  //     url: '/users',
  //     method: 'GET',
  //   })
  // },

  // getUserPosts: (userId: string) => {
  //   return request<Posts>({
  //     url: `/users/${userId}/posts`,
  //     method: 'GET',
  //   })
  // },
}

export default Api
