import React, { createContext } from 'react'

const { Provider, Consumer } = createContext({})

export const ModuleContextProvider = Provider
export const ModuleContextConsumer = Consumer


export default (Component) => (props) => (
  <Consumer>
    {moduleObj => (
      <Component
        {...props }
        {...moduleObj}
      />
    )}
  </Consumer>
)
