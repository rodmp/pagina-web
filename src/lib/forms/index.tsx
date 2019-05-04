import React, { ReactNode, RefObject, useContext, useEffect, useState } from 'react'

export { default as Field } from './Field'
export { default as Form } from './Form'
export { default as Submit } from './Submit'

interface Props {
  children: ReactNode
}

interface FormDataType {
  [inputKey: string]: string
}

type SetStateValueType = string | FormDataType

// TODO: use these interfaces A and B for the SetStateProps ?

// interface A {
//   x: number,
//   y?: undefined
// }
// interface B {
//   x?: undefined,
//   y: number
// }

// type Z = A | B;

interface SetStateProps<V extends SetStateValueType = SetStateValueType> {
  formName: string,
  inputName?: string
  value: V
}

type setStateType = (props: SetStateProps) => void

interface FormState {
  [formKey: string]: FormDataType | undefined
}

interface Store {
  state: FormState,
  setState: setStateType,
}

export const FormContext = React.createContext<Store>({
  setState: () => undefined,
  state: {},
})
export const FormProvider = ({ children }: Props) => {
  const [store, setStore] = useState<Store>({
    setState,
    state: {},
  })
  function setState (props: SetStateProps) {
    const { formName, inputName, value } = props

    setStore(prevStore => ({
      ...prevStore,
      state: {
        ...prevStore.state,
        [formName]: {
          ...(
            typeof inputName === 'string' && typeof value === 'string'
            ? {
              ...prevStore.state[formName],
              [inputName]: value
            }
            : value as FormDataType
          )
        }
      }
    }))
  }
  return(
    <FormContext.Provider value={store}>
      { children }
    </FormContext.Provider>
  )
}

interface UseInputArgs {
  inputRef: RefObject<HTMLInputElement>,
  defaultValue?: string
}

type setValueType = (str: string) => void
type useInputType = (args: UseInputArgs) => [string, setValueType]

export const useInput: useInputType = (args: UseInputArgs) => {
  const { inputRef, defaultValue = '' } = args
  const { state, setState } = useContext(FormContext)
  const [, setInitialized] = useState(false)
  useEffect(() => {
    // TODO: context instead of state here? (use `setState`, not `setInitialized`)
    setInitialized(true)
  }, [])
  if (inputRef.current && inputRef.current.form) {
    const formName = inputRef.current.form.name
    const inputName = inputRef.current.name
    const formData = state[formName] || {}
    const value = typeof formData[inputName] === 'string' ? formData[inputName] : defaultValue
    const setValue: setValueType = (str: string) => setState({ formName, inputName, value: str })
    return [value, setValue]
  }
  const valuePlaceholder = defaultValue
  const setValuePlaceholder: setValueType = () => { return }
  return [valuePlaceholder, setValuePlaceholder]
}

interface UseFormArgs {
  formRef: RefObject<HTMLFormElement>
}

const getNamedInputs = (elements: HTMLFormControlsCollection) => {
  const namedInputs = Array.from(elements).filter(el => el instanceof HTMLInputElement && el.name)
  return namedInputs as HTMLInputElement[]
}

const getObjectFromInputs = (elements: HTMLInputElement[]) => {
  const obj: FormDataType = {}
  elements.forEach(el => obj[el.name] = el.value)
  return obj
}

export const useForm = (args: UseFormArgs) => {
  const { formRef } = args
  const { state, setState } = useContext(FormContext)

  useEffect(() => {
    const formEl = (formRef.current as HTMLFormElement)
    const inputs = getNamedInputs(formEl.elements)
    const value = getObjectFromInputs(inputs)
    setState({ formName: formEl.name, value })
  }, [])
  const form = formRef.current
  if (form) {
    const values = state[form.name] || {}
    return values
  }

  return {}
}
