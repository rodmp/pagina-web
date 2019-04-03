import { fontFamily } from 'root/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

import classNames from 'classnames'

const styles = {
  fontStyle: {
    fontFamily,
    martginTop: 14,
    fontSize: 24,
    lineHeight: 1.25,
    maxWidth: 405
  },
}

export const TitleUnstyled = memo((({ classes, children, additionalClass }) => (
	<div className={classNames(classes.fontStyle, additionalClass)}>
    {children}
  </div>
)))

export default withStyles(styles)(TitleUnstyled)
