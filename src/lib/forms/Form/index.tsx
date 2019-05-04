import React, {
  ReactElement,
  useEffect,
  useRef,
} from 'react'
import { Request, RequestDispatcher } from 'react-request-hook'
import { useForm } from '../'

// interface Props extends FormHTMLAttributes {
interface Props {
  children: ReactElement | ReactElement[],
  onSubmit?: RequestDispatcher<Request>,
  name: string,
}

const Form = ({ children, onSubmit, name }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  // TODO: useForm doesn't create persistent storage, i.e. it clears after hotReload, need to fix
  const values = useForm({ formRef })
  useEffect(() => {
    const form = (formRef.current) as HTMLFormElement
    const event: EventListener = (e) => {
      e.preventDefault()
      if (typeof onSubmit === 'function') {
        onSubmit(values)
      }
    }
    form.addEventListener('submit', event)
    return () => form.removeEventListener('submit', event)
  }, [formRef.current, values])
  // const handleChange = (e: SyntheticEvent) => {
  //   e.preventDefault()
  //   // if (e.type === 'change') {
  //   //   console.log('2. Form changed')
  //   // }
  // }
  return(
    <form ref={formRef} name={name}>
      { children }
    </form>
  )
}

export default Form
