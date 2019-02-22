import {
  DARE_CREATE_SUCCESS_ROUTE_ID
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import {
  DARE_CREATE_SUCCESS_MODULE_ID
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

export default {
  [DARE_CREATE_SUCCESS_ROUTE_ID]: {
    url: '/dare-create-success',
    modules: [
      DARE_CREATE_SUCCESS_MODULE_ID,
    ]
  }
}