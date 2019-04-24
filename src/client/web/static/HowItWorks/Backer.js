import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Link from 'root/src/client/web/base/Link'
import {
	CREATE_PROJECT_ROUTE_ID,
	RULES_OF_USE_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import Card from 'root/src/client/web/base/Card'
import BullhornIcon from 'root/src/client/assets/bullhorn-solid.svg'
import PledgeIcon from 'root/src/client/assets/comments-regular.svg'
import WatchIcon from 'root/src/client/assets/play-circle-regular.svg'
import ClockIcon from 'root/src/client/assets/clock-outline.svg'
import SmileIcon from 'root/src/client/assets/smile-regular.svg'
import styles from './style'

const Backer = ({ classes }) => (
	<div className={classNames('flex', 'layout-row', 'layout-wrap', 'layout-xs-column', 'layout-sm-column', 'layout-md-column', classes.cardWrapper)}>
		<Card title="Dare" icon={BullhornIcon}>
			<p>
          Dare your favorite streamer to do something awesome.
			</p> <p>If it follows
          our <Link routeId={RULES_OF_USE_ROUTE_ID}>Rules of Use</Link>, we'll make it active
		  on our marketplace so other people can increase the Bounty!
			</p>
		</Card>
		<Card title="Pledge" icon={PledgeIcon}>
			<p>
		  Once your streamer accepts the Dare, they will set a goal amount for
		  the Bounty. Pledge and spread the word so you can hit that Bounty
		  goal!
			</p><p> Nobody pays until the streamer delivers video proof.
       </p>
		</Card>
		<Card title="Watch" icon={WatchIcon}>
			<p>
		  Once that Bounty goal is pledged, the streamer will submit video
		  proof to Dare Drop.
			</p><p> We’ll verify the proof, then you pay your pledge
		  and watch your Dare delivered!
       </p>
		</Card>
		<Card title="Expire" icon={ClockIcon}>
			<p>
		  If the streamer can’t deliver in 30 days, your Dare will expire.
			</p><p>You
		  won’t have to pay and the streamer won’t be able to gather the
		  Bounty.
       </p>
		</Card>
		<Card title="Get Started" icon={SmileIcon}>
			<p>
          Dare your favorite streamer or pledge to a Dare you like.
			</p>
			<p />
			<span className={classes.marketplace}>
				<Link routeId={CREATE_PROJECT_ROUTE_ID}>
					<h3>Create a new Dare +</h3>
				</Link>
			</span>
		</Card>
	</div>
)

export default withStyles(styles)(Backer)
