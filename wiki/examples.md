# Examples

## Typical page

> Should be better documented

A **`Page`** - a file (js function) placed in `src/pages`

```tsx
import React from 'react'
import { PageType, Entities } from '@types'

const DataInbox: PageType<Entities> = props => {
  const [{ data, error }, ...TBD...] = props.resource
  return(
    <div>
      <span>Hello, world!</span>
    </div>
  )
}

DataInbox.getInitialProps = getResource(Api.entities, [{
  fields: [ 'id', 'title', 'entity_type', 'created_at', 'originally_created_at'],
  include: [],
  limit: 10,
}])
```
