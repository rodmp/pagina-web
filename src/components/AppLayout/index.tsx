import { AppLayoutProps } from '@types'
import { useRouter } from 'next/router'
import React, {
  useEffect,
  useMemo,
} from 'react'
import { RequestProvider } from 'react-request-hook'
import Navigation from '~/components/Navigation'
import getAxiosInstance from '~/helpers/getAxiosInstance'
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

  const axios = useMemo(() => getAxiosInstance(authToken), [authToken])

  return(
    <div>
      <RequestProvider value={axios}>
        <FormProvider>
          <Navigation/>
          <Page {...pageProps}/>
        </FormProvider>
      </RequestProvider>
    </div>
  )
}

export default AppLayout
