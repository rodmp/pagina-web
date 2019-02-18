import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Link from 'sls-aws/src/client/web/base/Link'
import {CREATE_PROJECT_ROUTE_ID} from 'sls-aws/src/shared/descriptions/routes/routeIds'
import Card from 'sls-aws/src/client/web/base/Card'
import StarIcon from 'sls-aws/src/client/assets/star-regular.svg'
import FlagIcon from 'sls-aws/src/client/assets/flag-regular.svg'
import TvIcon from 'sls-aws/src/client/assets/tv-solid.svg'
import HeartIcon from 'sls-aws/src/client/assets/heart-outline.svg'
import SmileIcon from 'sls-aws/src/client/assets/smile-regular.svg'
import styles from './style'

const Streamer = ({ classes }) => (
	<div className={classNames('flex', 'layout-row', 'layout-wrap', 'layout-xs-column', 'layout-sm-column', 'layout-md-column', classes.cardWrapper)}>
		<Card title="Accept" icon={StarIcon}>
			<p>Verify your Twitch Channel from the pledge page to accept a Dare.</p>
		</Card>
		<Card title="Goal" icon={FlagIcon}>
			<p>Set a goal for the Bounty. Remember that only 90% can usually be 
				collected due to transaction issues, so take that into account.</p>
				<p>Then mention the Dare on your stream!</p>
		</Card>
		<Card title="Stream" icon={TvIcon}>
			<p>When the Bounty reaches your goal we will let you know.</p><p>Then, 
				live stream and upload video proof to Double Dog within 30 days.
			</p>
		</Card>
		<Card title="Reward" icon={HeartIcon}>
			<p>We will verify the proof and you’ll get paid!</p>
		</Card>
		<Card title="Get Started" icon={SmileIcon}>
			<p>Create a dare for yourself or another streamer.</p>
			<p></p>
			<span className={classes.marketplace}>
				<Link routeId={CREATE_PROJECT_ROUTE_ID}>
					<h3>{'Create a new Dare +'}</h3>
				</Link>
			</span>
		</Card>
		
	</div>
)

export default withStyles(styles)(Streamer)
