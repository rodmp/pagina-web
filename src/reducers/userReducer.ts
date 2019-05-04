// TODO: remove ?

import { createContext } from 'react'

enum TYPES {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE',
}

interface User {
  id: number
}

interface State {
  token?: string,
  user?: User
}

// interface Payload {
// }

interface Action {
  type: string,
  action: {},
}

const userReducer = (state: State, action: Action) => {
  const { type } = action
  switch (type) {
    case TYPES.USER_LOGIN_REQUEST: {
      return {}
    }
    default: return state
  }
}

const UserContext = createContext({})

export { TYPES, UserContext }
export default userReducer
