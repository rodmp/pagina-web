import { AppLayoutProps } from '@types'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { RequestProvider } from 'react-request-hook'
import Navigation from '~/components/Navigation'
import getAxiosConfig from '~/helpers/getAxiosConfig'
import { FormProvider } from '~/lib/forms'

const AppLayout = (props: AppLayoutProps) => {
  const { Page, authToken, pageProps } = props

  const isAuth = Boolean(authToken)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath !== '/login' && !isAuth) {
      router.push('/login')
    }
  }, [router.asPath, isAuth])

  const axiosInstance = useMemo(() => axios.create(getAxiosConfig(authToken)), [
    authToken,
  ])

  return (
    <div>
      <RequestProvider value={axiosInstance}>
        <FormProvider>
          <Navigation />
          <Page {...pageProps} />
        </FormProvider>
      </RequestProvider>
    </div>
  )
}

export default AppLayout
