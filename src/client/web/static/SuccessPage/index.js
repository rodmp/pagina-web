import React from 'react'

import Link from 'sls-aws/src/client/web/base/Link'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import SocialIconSet from 'sls-aws/src/client/web/static/reusable/socialIconSet'

import styles from './style'


const SuccessPage = ({ classes, pageContent }) => (
	<div className="flex layout-column layout-align-space-between">
		<section className={classes.section}>
			<div className={classes.content}>
				<h3 className={classes.sectionTitle}>{pageContent.title}</h3>
				<ul className={classes.list}>
					{pageContent.paragraphs.map((paragraph, idx) => (
						<li key={idx}>{paragraph}</li>
					))}
				</ul>
				<Link routeId={pageContent.link}>
					<p className={classes.link}>{pageContent.linkLabel}</p>
				</Link>
			</div>
		</section>
		<div className={classNames(classes.imageWrapper, 'flex flex-column layout-align-end')}>
			<div className={classes.imageContainer}>
				<img
					className={classNames(classes.image)}
					src={pageContent.bannerFooterImage}
					alt={pageContent.title}
				/>
				<SocialIconSet className={classes.icons} />
			</div>
		</div>
	</div>

)
export default withStyles(styles)(SuccessPage)