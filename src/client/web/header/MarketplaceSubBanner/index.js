import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Megaphone from 'sls-aws/src/client/assets/Megaphone.svg'
import Bubbles from 'sls-aws/src/client/assets/Bubbles.svg'
import Player from 'sls-aws/src/client/assets/Player.svg'

import styles from './styles';

const SubBanner = ({classes}) => {
    return (
        <div className={classes.container}>
            <div className={classes.stepComponent}>
                <div>
                    <img src={}/>
                    <div></div>
                </div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div></div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className={classes.subTitle}>Active Dares</div>
        </div>
    );
};

export default withStyles(styles)(SubBanner);