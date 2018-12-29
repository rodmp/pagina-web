import React, { memo, Fragment, useState } from 'react'

import { navLinkStyle } from 'sls-aws/src/client-web/commonStyles'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { withStyles } from '@material-ui/core/styles'

import Link from 'sls-aws/src/client-web/base/Link'

const styles = {
	root: {
		padding: 0,
		height: 'inherit',
	},
	navLinkStyle,
}

export const NavMenu = memo(({ menuLabel, menuItems, classes }) => {
	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState()
	return (
		<Fragment>
			<button
				type="button"
				className={classes.navLinkStyle}
				onClick={(e) => {
					setAnchorEl(e.target)
					setOpen(true)
				}}
			>
				{menuLabel}
			</button>
			<Menu
				open={open}
				onClose={() => setOpen(false)}
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				{menuItems.map(({ label, routeId }) => (
					<MenuItem
						key={label}
						disableGutters
						classes={classes}
					>
						<Link
							key={label}
							navMenuStyle
							routeId={routeId}
						>
							{label}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</Fragment>
	)
})

export default withStyles(styles)(NavMenu)
