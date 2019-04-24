import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faVk
} from '@fortawesome/free-brands-svg-icons'

import classNames from 'classnames'

import styles from './style'

const socialIconSet = ({ classes }) => (
  <div className={classes.SocialContainer}>
    <a href="">
      <div className={classNames(classes.SocialIcon, classes.Facebook)}>
        <FontAwesomeIcon icon={faFacebookF} size="2x" color="#ffffff" />
      </div>
    </a>
    <a href="">
      <div className={classNames(classes.SocialIcon, classes.Twitter)}>
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#ffffff" />
      </div>
    </a>
    <a href="">
      <div className={classNames(classes.SocialIcon, classes.Youtube)}>
        <FontAwesomeIcon icon={faYoutube} size="2x" color="#ffffff" />
      </div>
    </a>
    <a href="">
      <div className={classNames(classes.SocialIcon, classes.Instagram)}>
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
      </div>
    </a>
    <a href="">
      <div className={classNames(classes.SocialIcon, classes.VK)}>
        <FontAwesomeIcon icon={faVk} size="2x" color="#ffffff" />
      </div>
    </a>
  </div>
)

export default withStyles(styles)(socialIconSet)