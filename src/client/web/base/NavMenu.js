import React, { memo, Fragment, useState, useRef } from 'react'

import { navLinkStyle } from 'sls-aws/src/client/web/commonStyles'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import ExpandMore from '@material-ui/icons/ExpandMore'

import { withStyles } from '@material-ui/core/styles'

import Link from 'sls-aws/src/client/web/base/Link'
import LabelOrIcon from 'sls-aws/src/client/web/base/LabelOrIcon'
import { ternary } from 'sls-aws/src/shared/util/ramdaPlus'

const styles = {
	root: {
		padding: 0,
		height: 'inherit',
	},
	navLinkStyle,
}

export const NavMenuUnstyled = memo(({
	menuLabel, menuIcon, menuItems, classes,
}) => {
	const [open, setOpen] = useState(false)
	const anchorEl = useRef()
	return (
		<Fragment>
				<button style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}
					type="button"
					className={classes.navLinkStyle}
					ref={anchorEl}
					onClick={() => setOpen(true)}
				>
					<LabelOrIcon label={menuLabel} icon={menuIcon} />
					<ExpandMore
						style={{ transition: '.3s', transform: ternary(open, "rotateX(180deg)", '') }}
					/>

				</button>
			
			<Menu
				open={open}
				onClose={() => setOpen(false)}
				anchorEl={anchorEl.current}
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
				{menuItems.map(({ label, icon, routeId }, i) => (
					<MenuItem
						// eslint-disable-next-line react/no-array-index-key
						key={i}
						disableGutters
						classes={{ root: classes.root }}
						onClick={() => setOpen(false)}
					>
						{/* eslint-disable jsx-a11y/anchor-is-valid */} 
						<Link
							navMenuStyle
							routeId={routeId}
						>
							<LabelOrIcon label={label} icon={icon} />
						</Link>
					</MenuItem>
				))}
			</Menu>
		</Fragment>
	)
})

export default withStyles(styles)(NavMenuUnstyled)
