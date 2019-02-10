import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Link from 'sls-aws/src/client/web/base/Link'
import Card from 'sls-aws/src/client/web/base/Card'
import BullhornIcon from 'sls-aws/src/client/assets/bullhorn-solid.svg'
import PledgeIcon from 'sls-aws/src/client/assets/comments-regular.svg'
import WatchIcon from 'sls-aws/src/client/assets/play-circle-regular.svg'
import styles from './style'

const Backer = ({ classes }) => (
	<div className={classNames('flex', 'layout-row', 'layout-wrap', 'layout-xs-column', 'layout-sm-column', 'layout-md-column', classes.cardWrapper)}>
		<Card title="Dare" icon={BullhornIcon}>
			<p>
          Dare your favorite streamer to do something. We make sure Dares follow
          our <Link routeId={null}>Rules of Use</Link>, then they go live!
			</p>
		</Card>
		<Card title="Pledge" icon={PledgeIcon}>
			<p>
          Put money on the line &amp; tell your friends. This is just a pledge
          and you’ll only be charged if the streamer delivers. If they don’t
          deliver, you won’t pay a thing!
			</p>
		</Card>
		<Card title="Watch" icon={WatchIcon}>
			<p>
          When the streamer delivers video proof, they get the pot, &amp; you
          get to see it.
			</p>
		</Card>
	</div>
)

export default withStyles(styles)(Backer)
