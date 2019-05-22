import { Token } from '@types'
import { request } from 'react-request-hook'

export default {
  login: ({ email, password }: { email: string; password: string }) => {
    const params = {
      email,
      grant_type: 'password',
      password,
    }
    return request<Token>({
      method: 'POST',
      params,
      url: '/oauth/token',
    })
  },

  refreshToken: ({ refreshToken }: { refreshToken: string }) => {
    const params = {
      grant_type: 'refresh_token',
      refreshToken,
    }
    return request<Token>({
      method: 'POST',
      params,
      url: '/oauth/token',
    })
  },

  // TODO:X move common part (limit, include, fields, etc.) to a separate type, then to extend it here
  // TODO:X add other props like search_by_title, by_type, etc.
  // https://github.com/prometheonsystems/bedrock-client2/issues/4
  entities: ({
    limit,
    // include,
    // fields,
    offset,
  }: {
    limit?: number
    // include?: string[],
    // fields?: string[],
    offset?: number
  }) => {
    const fields = [
      'id',
      'title',
      'entity_type',
      'created_at',
      'originally_created_at',
    ]
    const include: string[] = []
    const params = {
      fields,
      include,
      limit,
      offset,
    }
    // TODO:X use an exact response (resource) type, not an 'any'
    // https://github.com/prometheonsystems/bedrock-client2/issues/4
    return request<any>({
      params,
      url: '/entities',
    })
  },

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
