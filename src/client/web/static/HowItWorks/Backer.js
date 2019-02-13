import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Link from 'sls-aws/src/client/web/base/Link'
import Card from 'sls-aws/src/client/web/base/Card'
import BullhornIcon from 'sls-aws/src/client/assets/bullhorn-solid.svg'
import PledgeIcon from 'sls-aws/src/client/assets/comments-regular.svg'
import WatchIcon from 'sls-aws/src/client/assets/play-circle-regular.svg'
import {
	RULES_OF_USE_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'
import styles from './style'

const Backer = ({ classes }) => (
	<div className={classNames('flex', 'layout-row', 'layout-wrap', 'layout-xs-column', 'layout-sm-column', 'layout-md-column', classes.cardWrapper)}>
		<Card title="Dare" icon={BullhornIcon}>
			<p>
          Dare your favorite streamer to do something awesome. If it follows
          our <Link routeId={RULES_OF_USE_ROUTE_ID}>Rules of Use</Link>, we'll make it active 
		  on our marketplace so other people can increase the Bounty!
			</p>
		</Card>
		<Card title="Pledge" icon={PledgeIcon}>
			<p>
          Once your streamer accepts the Dare, they will set a goal amount
		  for the Bounty. Pledge and spread the word so you can hit that
		  Bounty goal! Nobody pays until the streamer delivers proof.
			</p>
		</Card>
		<Card title="Watch" icon={WatchIcon}>
			<p>
          Once that Bounty goal is pledged, the streamer will submit video
		  proof to Double Dog. We'll verify the proof, then you pay your
		  pledge and watch your Dare delivered!
			</p>
		</Card>
		<Card title="Expire" icon={ExpireIcon}>
			<p>
          If the streamer can't deliver in 30 days, your Dare will expire.
		  You won't have to pay and the streamer won't be able to gather
		  the Bounty.
			</p>
		</Card>
	</div>
)

export default withStyles(styles)(Backer)
