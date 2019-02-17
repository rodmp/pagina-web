import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { SimpleButton } from 'sls-aws/src/client/web/base/CustomButton'
import Link from 'sls-aws/src/client/web/base/Link'
import {
	TERMS_OF_SERVICE_ROUTE_ID,
	ACTIVE_PROJECTS_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'
import Backer from './Backer'
import Streamer from './Streamer'
import styles from './style'

const HowItWorks = ({ classes }) => {
	const [isStreamer, setStreamer] = useState(false)
	const handleClickBacker = () => setStreamer(false)
	const handleClickStreamer = () => setStreamer(true)

	return (
		<main className={classes.mainContent}>
			<div className={classes.container}>
				<div className={classes.question}>
					<div className="flex layout-row layout-align-center">
						<SimpleButton onClick={handleClickBacker} active={!isStreamer} title="Backer" />
						<SimpleButton onClick={handleClickStreamer}	active={isStreamer}	title="Streamer" />
					</div>
				</div>
				{isStreamer ? <Streamer /> : <Backer />}
				<footer className={classes.footer}>
					<span className={classes.marketplace}>
						<Link routeId={ACTIVE_PROJECTS_ROUTE_ID}>
							<h3>{'Go to Marketplace'}</h3>
						</Link>
					</span>
					<span className={classes.terms}>
              See our <Link routeId={TERMS_OF_SERVICE_ROUTE_ID}>Terms of Service</Link> for detail.
					</span>
				</footer>
			</div>
		</main>
	)
}

export default withStyles(styles)(HowItWorks)
