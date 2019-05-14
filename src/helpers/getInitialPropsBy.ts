import { NextContext } from '@types'
import { AxiosError } from 'axios'
import { Arguments, Request } from 'react-request-hook'
import getAxiosInstance from '~/helpers/getAxiosInstance'
// import { AxiosInstance } from 'axios'

// TODO:X ideally, move this to a library? or create a PR for https://github.com/schettino/react-request-hook ?
// https://github.com/prometheonsystems/bedrock-client2/issues/10
// https://github.com/schettino/react-request-hook/issues/14

const getInitialPropsBy = <TRequest extends Request = Request>(
  request: TRequest,
  params?: Arguments<TRequest>
) => async (props: NextContext) => {
  const { authToken } = props
  const axios = getAxiosInstance(authToken)
  const args = params || []
  let initialResponse

  if (typeof window === 'undefined') {
    const axiosResponse = await axios(request(...args)).catch((error: AxiosError) => {
      if (!error.response) {
        return { data: error.message, statusText: 'error' }
      }
      return error.response
    })
    const { data, statusText } = axiosResponse
    initialResponse = statusText === 'OK' ? { data } : { error: data }
  }

  return {
    resource: {
      initialResponse,
    },
  }
}

export default getInitialPropsBy
