import reduxConnector from 'root/src/shared/util/reduxConnector'

import recordPageTypeSelector from 'root/src/client/logic/api/selectors/recordPageTypeSelector'

export default reduxConnector(
  [
    ['recordPageType', recordPageTypeSelector],
  ],
)
