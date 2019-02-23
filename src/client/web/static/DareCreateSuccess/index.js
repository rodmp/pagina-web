import React from 'react'

import Link from 'sls-aws/src/client/web/base/Link'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import SocialIconSet from 'sls-aws/src/client/web/static/reusable/socialIconSet'

import content from './pageContent'
import styles from './style'

const { title, paragraphs, link, linkLabel } = content

const DareCreateSuccess = ({ classes }) => (
  <section className={classes.section}>
    <div className={classes.content}>
      <h3 className={classes.sectionTitle}>{title}</h3>
      <ul className={classes.list}>
        {paragraphs.map((paragraph, idx) => (
          <li key={idx}>{paragraph}</li>
        ))}
      </ul>
      <Link to={link}>
        <p className={classes.link}>{linkLabel}</p>
      </Link>
    </div>
    <div className={classNames(classes.fullWidth, classes.imageContainer, 'flex', 'flex-column')}>
      <SocialIconSet className={classes.icons} />
    </div>
  </section>
)
export default withStyles(styles)(DareCreateSuccess)
