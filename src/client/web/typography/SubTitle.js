import React, { memo } from 'react'

import { fontFamily } from 'sls-aws/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  fontStyle: {
    fontFamily,
    martginTop: 14,
    fontSize: 24,
    lineHeight: 1.25,
    maxWidth: 405
  },
}

export const TitleUnstyled = memo((({ classes, children }) => (
  <div className={classes.fontStyle}>
    {children}
  </div>
)))

export default withStyles(styles)(TitleUnstyled)
