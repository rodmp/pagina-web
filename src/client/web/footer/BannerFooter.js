import React, { memo } from 'react'

import withModuleContext from 'sls-aws/src/client/util/withModuleContext'
import footerConnector from 'sls-aws/src/client/logic/footer/connectors/footerConnector'
import Link from 'sls-aws/src/client/web/base/Link'

import classNames from 'classnames'

import { orNull } from 'sls-aws/src/shared/util/ramdaPlus'

import facebook from 'sls-aws/src/client/assets/Facebook.png'
import twitter from 'sls-aws/src/client/assets/Twitter.png'
import instagram from 'sls-aws/src/client/assets/Instagram.png'
import youtube from 'sls-aws/src/client/assets/Youtube.png'
import vk from 'sls-aws/src/client/assets/VK.png'

import styles from './style'

export const BannerFooterUnconnected = memo(({ classes, bannerFooterImage, isSuccessPage }) => (
	<div className={classes.imageContainer}>
		{orNull(
			isSuccessPage,
			<div className={classes.socialContainer}>
				<div className={classes.socialIcon}>
					<Link href="https://facebook.com">
						<img src={facebook} alt="facebook" />
					</Link>
				</div>
				<div className={classes.socialIcon}>
					<Link href="https://twitter.com">
						<img src={twitter} alt="twitter" />
					</Link>
				</div>
				<div className={classes.socialIcon}>
					<Link href="https://youtube.com">
						<img src={youtube} alt="youtube" />
					</Link>
				</div>
				<div className={classes.socialIcon}>
					<Link href="https://instagram.com">
						<img src={instagram} alt="instagram" />
					</Link>
				</div>
				<div className={classes.socialIcon}>
					<Link href="https://vk.com">
						<img src={vk} alt="vk" />
					</Link>
				</div>
			</div>,
		)}
		<div className={classNames(classes.footerImg, 'flex layout-row')}>
			<div
				className={classNames(classes.bannerBg, 'flex')}
				style={{ backgroundImage: `url(${bannerFooterImage})` }}
			/>
		</div>
	</div>
))

export default withModuleContext(
	footerConnector(BannerFooterUnconnected, styles),
)
