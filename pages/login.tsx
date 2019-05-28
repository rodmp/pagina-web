import { PageType } from '@types'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import Api from '~/Api'
import loginEffect from '~/effects/loginEffect'
import { Field, Form, Submit } from '~/lib/forms'

const Login: PageType = () => {
  const router = useRouter()
  const [tokenData, getToken] = useResource(Api.login)
  const { data: token, isLoading } = tokenData
  useEffect(loginEffect({ token, router }), [token])
  return (
    <div>
      <div>Login:</div>
      <Form name='login' onSubmit={getToken}>
        <Field name='email' label='Email:' />
        <Field name='password' type='password' label='Password:' />
        <Submit isLoading={isLoading} />
      </Form>
    </div>
  )
}

export default Login
