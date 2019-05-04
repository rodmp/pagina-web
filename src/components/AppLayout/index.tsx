import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useMemo } from 'react'
import { RequestProvider } from 'react-request-hook'
import Navigation from '~/components/Navigation'
import { FormProvider } from '~/lib/forms'

const { BACKEND_URL: baseURL } = process.env

interface Props {
  children: ReactNode,
  authToken?: string
}

const getAxiosInstance = (token?: string) => axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    ...( token && { Authorization: `Bearer ${token}` } )
  }
})

const AppLayout = (props: Props) => {
  const { children, authToken } = props
  const isAuth = Boolean(authToken)
  const router = useRouter()
  useEffect(() => {
    if (router.asPath !== '/login' && !isAuth) {
      router.push('/login')
    }
  }, [router.asPath, isAuth])
  const axiosInstance = useMemo(() => getAxiosInstance(authToken), [authToken])

  return(
    <div>
      <RequestProvider value={axiosInstance}>
        <FormProvider>
          <Navigation/>
          { children }
        </FormProvider>
      </RequestProvider>
    </div>
  )
}

export default AppLayout
