import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Card from 'sls-aws/src/client/web/base/Card'
import StarIcon from 'sls-aws/src/client/assets/star-regular.svg'
import NotesIcon from 'sls-aws/src/client/assets/notes-medical-solid.svg'
import FlagIcon from 'sls-aws/src/client/assets/flag-regular.svg'
import TvIcon from 'sls-aws/src/client/assets/tv-solid.svg'
import SmileIcon from 'sls-aws/src/client/assets/smile-regular.svg'
import styles from './style'

const Streamer = ({ classes }) => (
	<div className={classNames('flex', 'layout-row', 'layout-wrap', 'layout-xs-column', 'layout-sm-column', 'layout-md-column', classes.cardWrapper)}>
		<Card title="Claim" icon={StarIcon}>
			<p>Go to the challenge &amp; accept the dare.</p>
		</Card>
		<Card title="Verify" icon={NotesIcon}>
			<p>You’ll have to verify that you are who you say you are.</p>
		</Card>
		<Card title="Goal" icon={FlagIcon}>
			<p>Set a goal amount for the pot, or just deliver.</p>
		</Card>
		<Card title="Stream" icon={TvIcon}>
			<p>
        When your goal is reached, live stream & upload the video of you meeting the challenge
        requirements.
			</p>
		</Card>
		<Card title="Reward" icon={SmileIcon}>
			<p>We’ll verify that you delivered &amp; you’ll get paid.</p>
		</Card>
	</div>
)

export default withStyles(styles)(Streamer)
