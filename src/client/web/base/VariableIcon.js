import { memo, createElement } from 'react'

import { prop } from 'ramda'

import Menu from '@material-ui/icons/Menu'

const allIcons = {
	menu: Menu,
}

export default memo(({ icon }) => createElement(prop(icon, allIcons)))
