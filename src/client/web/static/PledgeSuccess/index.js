import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './style'

import Link from 'sls-aws/src/client/web/base/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faTwitter,
    faYoutube,
    faInstagram,
    faVk
} from '@fortawesome/free-brands-svg-icons'

const PledgeSuccess = ({ classes }) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Rectangle}>
                <h1 className={classes.Success}>Success!</h1>
                <div className={classes.ThankYou}>
                    Thank you for your contribution!<br />
                    We'll email you when the video is live.<br />
                    <br />
                    Remember this is just a pledge and you’ll only be charged if the streamer delivers.<br />
                    If they don’t deliver, you won’t pay a thing!
                </div>
                <a className={classes.GotoMarketplace} href="/marketplace">Go to Marketplace</a>
                <div className={classes.Space2}></div>
                <div className={classes.ActionFigures}>
                    <div className={classes.SocialContainer}>
                        <a href="">
                            <div className={[classes.SocialIcon, classes.Facebook].join(' ')}>
                                <FontAwesomeIcon icon={faFacebookF} size="2x" color="#ffffff" />
                            </div>
                        </a>
                        <a href="">
                            <div className={[classes.SocialIcon, classes.Twitter].join(' ')}>
                                <FontAwesomeIcon icon={faTwitter} size="2x" color="#ffffff" />
                            </div>
                        </a>
                        <a href="">
                            <div className={[classes.SocialIcon, classes.Youtube].join(' ')}>
                                <FontAwesomeIcon icon={faYoutube} size="2x" color="#ffffff" />
                            </div>
                        </a>
                        <a href="">
                            <div className={[classes.SocialIcon, classes.Instagram].join(' ')}>
                                <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
                            </div>
                        </a>
                        <a href="">
                            <div className={[classes.SocialIcon, classes.VK].join(' ')}>
                                <FontAwesomeIcon icon={faVk} size="2x" color="#ffffff" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(PledgeSuccess)
