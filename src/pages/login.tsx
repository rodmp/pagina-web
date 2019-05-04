import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import Api from '~/Api'
import loginEffect from '~/effects/loginEffect'
import {
  Field,
  Form,
  Submit,
} from '~/lib/forms'

const Login = () => {
  const router = useRouter()
  const [{ data: token, isLoading }, getToken] = useResource(Api.login)
  useEffect(loginEffect({ token, router }), [token])
  return(
    <div>
      <div>Login:</div>
      <Form name='login' onSubmit={getToken}>
        <Field name='email'/>
        <Field name='password' type='password'/>
        <Submit isLoading={isLoading}/>
      </Form>
    </div>
  )
}

export default Login
