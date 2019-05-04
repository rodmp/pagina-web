import React, { BaseSyntheticEvent, InputHTMLAttributes, useRef } from 'react'
import { useInput } from './../'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  defaultValue?: string
  type?: 'text' | 'password' | 'hidden',
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export type FieldType = (props: Props) => JSX.Element

const Field: FieldType = ({ name, type, defaultValue = '' }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  // const mapState = useCallback(({ state }) => state[])
  // const { value, setValue } = useInput({ inputRef, defaultValue })
  const [value, setValue] = useInput({ inputRef, defaultValue })
  // const [value, setValue] = useState(defaultValue)
  // const changeValue = useCallback()
  const handleChange = (e: BaseSyntheticEvent<InputEvent, HTMLInputElement, HTMLInputElement>) => {
    e.preventDefault()
    // e.persist()
    setValue(e.target.value)
  }
  // TODO: use label instead of div, and make it optional, by passing arg 'label={"Some label"}'
  return(
    <>
      <div>{capitalizeFirstLetter(name)}</div>
      <input ref={inputRef} type={type} name={name} value={value} onChange={handleChange}/>
    </>
  )
}

export default Field
