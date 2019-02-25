import React, { memo } from 'react'

import classNames from 'classnames'
import facebookFooter from 'root/src/client/assets/Facebook footer.png'
import twitterFooter from 'root/src/client/assets/Twitter footer.png'
import instagramFooter from 'root/src/client/assets/Instagram footer.png'
import youtubeFooter from 'root/src/client/assets/Youtube footer.png'

import {
	HOW_IT_WORKS_ROUTE_ID,
	TERMS_OF_SERVICE_ROUTE_ID,
	COOKIE_POLICY_ROUTE_ID,
	PRIVACY_POLICY_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import { EMAIL } from 'root/src/shared/constants/pageData'
import Link from 'root/src/client/web/base/Link'
import withModuleContext from 'root/src/client/util/withModuleContext'
import footerConnector from 'root/src/client/logic/app/connectors/footerConnector'
import styles from './style'

export const FooterUnconnected = memo(({ classes, currentYear }) => (
	<div
		className={classNames(
			'layout-row layout-align-center-center',
			classes.root,
		)}
	>
		<div className={classes.container}>
			<div className={classes.top}>
				<div className={classes.title}>Support</div>
				<div className={classNames(classes.text, 'margin')}>
					<Link routeId={HOW_IT_WORKS_ROUTE_ID}>
						<span>How it works</span>
					</Link>
				</div>
				<div className={classNames(classes.text, 'margin')}>
					<Link routeId={''}>
						<span>Contact Us</span>
					</Link>
				</div>
			</div>
			<div className={classes.line} />
			<div className={classes.bottom}>
				<div className={classes.socialContainerSmall}>
					<div className={classes.socialIconSmall}>
						<Link href="https://facebook.com">
							<img src={facebookFooter} alt="facebook" />
						</Link>
					</div>
					<div className={classes.socialIconSmall}>
						<Link href="https://instagram.com">
							<img src={instagramFooter} alt="instagram" />
						</Link>
					</div>
					<div className={classes.socialIconSmall}>
						<Link href="https://youtube.com">
							<img src={youtubeFooter} alt="youtube" />
						</Link>
					</div>
					<div className={classes.socialIconSmall}>
						<Link href="https://twitter.com">
							<img src={twitterFooter} alt="twitter" />
						</Link>
					</div>
				</div>
				<div className={classes.bottomWrap}>
					<div className={classNames(classes.text, 'margin')}>
						<Link routeId={TERMS_OF_SERVICE_ROUTE_ID}><span>Terms of Service</span></Link>
					</div>
					<div className={classNames(classes.text, 'margin')}>
						<Link routeId={COOKIE_POLICY_ROUTE_ID}><span>Cookie Policy</span></Link>
					</div>
					<div className={classNames(classes.text, 'margin')}>
						<Link routeId={PRIVACY_POLICY_ROUTE_ID}><span>Privacy Policy</span></Link>
					</div>
					<div className={classNames(classes.text, 'margin')}>
						<Link href={`mailto:${EMAIL}`}><span>Double Dare &copy;{ currentYear }</span></Link>
					</div>
				</div>
			</div>
		</div>
	</div>
))

export default withModuleContext(
	footerConnector(FooterUnconnected, styles),
)
