import React from 'react'

interface Props {
  children?: React.ReactElement | React.ReactElement[],
  value?: string,
  isLoading?: boolean
}

const Submit = ({ children, value, isLoading }: Props) => {
  // TODO: add a loading icon to the button, instead of '...'
  const buttonName = `${value || 'Submit'}${isLoading && '...' || ''}`
  return(
    <input type='submit' value={buttonName}>
      { children }
    </input>
  )
}

export default Submit
