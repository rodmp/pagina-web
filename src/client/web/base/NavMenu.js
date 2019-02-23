import React, { memo, Fragment, useState, useRef } from 'react'

import { navLinkStyle, gtSmMediaQuery } from 'sls-aws/src/client/web/commonStyles'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import ExpandMore from '@material-ui/icons/ExpandMore'

import { withStyles } from '@material-ui/core/styles'

import Link from 'sls-aws/src/client/web/base/Link'
import LabelOrIcon from 'sls-aws/src/client/web/base/LabelOrIcon'

import classNames from 'classnames'

const styles = {
	root: {
		padding: 0,
		height: 'inherit',
	},
	arrow: {
		transition: '.3s',
		display: 'none',
		[gtSmMediaQuery]: {
			display: 'inline-block',
		},
	},
	arrowOpen: {
		transform: 'rotateX(180deg)',
	},
	menu: {
		position: 'absolute',
	},
	centeredButton: {
		display: 'flex',
		alignItems: 'center',
	},
	centeredButton: {
		display: 'flex',
		alignItems: 'center'
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
			<button
				type="button"
				className={classNames(classes.navLinkStyle, classes.centeredButton)}
				ref={anchorEl}
				onClick={() => setOpen(true)}
			>
				<LabelOrIcon label={menuLabel} icon={menuIcon} />
				<ExpandMore className={classNames(
					classes.arrow, { [classes.arrowOpen]: open },
				)}
				/>
			</button>
			<Menu
				className={classes.menu}
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
