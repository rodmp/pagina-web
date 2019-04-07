import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { fontFamily } from 'root/src/client/web/commonStyles'
import { withStyles } from '@material-ui/core/styles'

import TextWithLinks from 'root/src/client/web/base/TextWithLinks'
import classNames from 'classnames'

const styles = {
	fontStyle: {
		fontFamily,
		fontSize: 16,
		lineHeight: 1.2,
	},
}

export const BodyUnstyled = memo((({ classes, children, style }) => (
	<div className={classNames(classes.fontStyle, style)}>
		<TextWithLinks text={children} />
	</div>
)))

BodyUnstyled.propTypes = {
	styles: PropTypes.obj,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default withStyles(styles)(BodyUnstyled)
