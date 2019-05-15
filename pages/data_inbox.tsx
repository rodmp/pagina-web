import { PageType } from '@types'
import React, { useCallback, useState } from 'react'
import { useResource } from 'react-request-hook'
import Api from '~/Api'

const LIMIT = 100

const initialParams = {
  limit: LIMIT,
  offset: undefined,
}

// const initialParams = {
//   email: 'admin@bedrock.ai',
//   password: 'bedrock',
// }

// TODO:X use entities type instead of `any`
// https://github.com/prometheonsystems/bedrock-client2/issues/4

const DataInbox: PageType<any> = _props => {
  const [offset, setOffset] = useState(0)
  const params = {
    ...initialParams,
    offset,
  }

  // const [response, getData] = useResource(Api.entities, [initialParams], Boolean(initialResponse))
  // const [response, getEntities] = useResource(Api.entities, [params])
  const [
    response,
    // getEntities,
  ] = useResource(Api.entities, [params])

  // TODO:X add error handling
  // https://github.com/prometheonsystems/bedrock-client2/issues/22

  const { data, isLoading } = response

  const handleClick = useCallback(() => setOffset(prevOffset => prevOffset + LIMIT), [offset])

  return(
    <div>
      <div>Data Inbox:</div>
      <div>{offset}</div>
      <button onClick={handleClick}>Next page</button>
      {/* TODO: return data */}
      { isLoading
        ? <div>loading...</div>
        : data && data.data.map((entity: any) => entity.id).join(',')
      }
    </div>
  )
}

export default DataInbox
