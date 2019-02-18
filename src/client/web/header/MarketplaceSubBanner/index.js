import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import Megaphone from 'sls-aws/src/client/assets/Megaphone.svg'
import Bubbles from 'sls-aws/src/client/assets/Bubbles.svg'
import Player from 'sls-aws/src/client/assets/Player.svg'

import styles from './styles';

const SubBanner = ({classes}) => {
    return (
        <div className={classes.container}>
            <div className={classes.stepComponent}>
                <div className={classes.item}>
                    <img src={Megaphone} className={classes.megaphone} />
                    <div className={classNames(classes.itemText, classes.dareAStreamer)}>DARE A STREAMER</div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleRight} color="rgba(128, 0, 128, 0.8)" size="lg" />
                </div>
                <div className={classes.item}>
                    <img src={Bubbles} className={classes.bubbles} />
                    <div className={classNames(classes.itemText, classes.crowdfundYourDare)}>CROWDFUND YOUR DARE</div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleRight} color="rgba(128, 0, 128, 0.8)" size="lg" />
                </div>
                <div className={classes.item}>
                    <img src={Player} className={classes.player} />
                    <div className={classNames(classes.itemText, classes.enjoyAwesomeContent)}>ENJOY AWESOME CONTENT</div>
                </div>
            </div>
            <div className={classes.subTitle}>Active Dares</div>
        </div>
    );
};

export default withStyles(styles)(SubBanner);