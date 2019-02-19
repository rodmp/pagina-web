import {
  ACCOUNT_SETTINGS_ROUTE_ID,
  CHANGE_PASSWORD_ROUTE_ID,
  MANAGE_PAYMENT_ROUTE_ID
} from 'sls-aws/src/shared/descriptions/routes/routeIds'


import {
  ACCOUNT_SETTINGS_MODULE_ID,
  ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

export default {
  [ACCOUNT_SETTINGS_ROUTE_ID]: {
    url: '/account-settings',
    modules: [ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID, ACCOUNT_SETTINGS_MODULE_ID],
  },

  [CHANGE_PASSWORD_ROUTE_ID]: {
    url: '/change-password',
  },

  [MANAGE_PAYMENT_ROUTE_ID]: {
    url: '/manage-payment',
  },
}
